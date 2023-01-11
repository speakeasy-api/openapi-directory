import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Notifications:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def add_notification(self, request: operations.AddNotificationRequest) -> operations.AddNotificationResponse:
        r"""Create a new notification
        Create a new notification for a [resource](#section/Identifying-Resources) in your account. Notifications can be sent via email or webhook;
        
        - To enable email, pass an array of email addresses to the `recipients` parameter of this call. 
        - To enable webhooks, setup the webhook callback URL in your account settings via [PATCH /account](#operation/updateAccount). 
        
        **Notes:**
          - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddNotificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationResponse])
                res.notification_response = out

        return res

    
    def delete_notification_by_id(self, request: operations.DeleteNotificationByIDRequest) -> operations.DeleteNotificationByIDResponse:
        r"""Delete a notification
        Deletes a notification. Note that deleting a notification _only_ deletes the notification &ndash; it does not delete any underlying files or folders.
        
        **Notes:**
        
        - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.
        - You can only delete notifications owned by your user account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/notifications/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNotificationByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmptyResponse])
                res.empty_response = out

        return res

    
    def get_notification_by_id(self, request: operations.GetNotificationByIDRequest) -> operations.GetNotificationByIDResponse:
        r"""Get notification details
        Get the details for a notification with a specific ID number. You'll be able to review its path, triggers and who's getting the notification. 
        
        **Notes**
        
        - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to view the detail for a notification.
        - You can only retrieve notifications owned by your user account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/notifications/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationResponse])
                res.notification_response = out

        return res

    
    def list_notifications(self, request: operations.ListNotificationsRequest) -> operations.ListNotificationsResponse:
        r"""Get a list of notifications
        Get a list of all the [notifications](/docs/account/06-notifications) you have access to. You can use sorting and filtering to limit the returned list.
        
        **Notes:**
          - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/notifications"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListNotificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationCollectionResponse])
                res.notification_collection_response = out

        return res

    
    def update_notification_by_id(self, request: operations.UpdateNotificationByIDRequest) -> operations.UpdateNotificationByIDResponse:
        r"""Update a notification
        Update an existing notification. You can add additional emails or change the action or users that cause a notification to trigger. 
        
        When updating recipient emails, make sure your `recipients` parameter contains the full list of people who should be included on the notification. If you resend the list without an existing recipient, they will be deleted from the notification emails. 
        
        **Notes:**
        
        - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.
        - You can only change notifications owned by your user account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/notifications/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNotificationByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationResponse])
                res.notification_response = out

        return res

    