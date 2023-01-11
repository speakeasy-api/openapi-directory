import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Push:
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

    
    def delete_push_device_details(self, request: operations.DeletePushDeviceDetailsRequest) -> operations.DeletePushDeviceDetailsResponse:
        r"""Delete a registered device's update token
        Delete a device details object.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/push/channelSubscriptions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePushDeviceDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content

        return res

    
    def get_channels_with_push_subscribers(self, request: operations.GetChannelsWithPushSubscribersRequest) -> operations.GetChannelsWithPushSubscribersResponse:
        r"""List all channels with at least one subscribed device
        Returns a paginated response of channel names.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/push/channels"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelsWithPushSubscribersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.get_channels_with_push_subscribers_2_xx_application_json_strings = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_push_device_details(self, request: operations.GetPushDeviceDetailsRequest) -> operations.GetPushDeviceDetailsResponseOutput:
        r"""Get a device registration
        Get the full details of a device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/push/deviceRegistrations/{device_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPushDeviceDetailsResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceDetailsOutput])
                res.device_details = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_push_subscriptions_on_channels(self, request: operations.GetPushSubscriptionsOnChannelsRequest) -> operations.GetPushSubscriptionsOnChannelsResponseOutput:
        r"""List channel subscriptions
        Get a list of push notification subscriptions to channels.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/push/channelSubscriptions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPushSubscriptionsOnChannelsResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceDetailsOutput])
                res.device_details = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content

        return res

    
    def get_registered_push_devices(self, request: operations.GetRegisteredPushDevicesRequest) -> operations.GetRegisteredPushDevicesResponseOutput:
        r"""List devices registered for receiving push notifications
        List of device details of devices registed for push notifications.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/push/deviceRegistrations"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegisteredPushDevicesResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceDetailsOutput])
                res.device_details = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def patch_push_device_details(self, request: operations.PatchPushDeviceDetailsRequest) -> operations.PatchPushDeviceDetailsResponseOutput:
        r"""Update a device registration
        Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/push/deviceRegistrations/{device_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchPushDeviceDetailsResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceDetailsOutput])
                res.device_details = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def publish_push_notification_to_devices(self, request: operations.PublishPushNotificationToDevicesRequest) -> operations.PublishPushNotificationToDevicesResponse:
        r"""Publish a push notification to device(s)
        A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/push/publish"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PublishPushNotificationToDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content

        return res

    
    def put_push_device_details(self, request: operations.PutPushDeviceDetailsRequest) -> operations.PutPushDeviceDetailsResponseOutput:
        r"""Update a device registration
        Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/push/deviceRegistrations/{device_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPushDeviceDetailsResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceDetailsOutput])
                res.device_details = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def register_push_device(self, request: operations.RegisterPushDeviceRequest) -> operations.RegisterPushDeviceResponseOutput:
        r"""Register a device for receiving push notifications
        Register a device’s details, including the information necessary to deliver push notifications to it. Requires \"push-admin\" capability.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/push/deviceRegistrations"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegisterPushDeviceResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceDetailsOutput])
                res.device_details = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def subscribe_push_device_to_channel(self, request: operations.SubscribePushDeviceToChannelRequest) -> operations.SubscribePushDeviceToChannelResponse:
        r"""Subscribe a device to a channel
        Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/push/channelSubscriptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubscribePushDeviceToChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content

        return res

    
    def unregister_all_push_devices(self, request: operations.UnregisterAllPushDevicesRequest) -> operations.UnregisterAllPushDevicesResponse:
        r"""Unregister matching devices for push notifications
        Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/push/deviceRegistrations"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UnregisterAllPushDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content

        return res

    
    def unregister_push_device(self, request: operations.UnregisterPushDeviceRequest) -> operations.UnregisterPushDeviceResponse:
        r"""Unregister a single device for push notifications
        Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/push/deviceRegistrations/{device_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UnregisterPushDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content

        return res

    
    def update_push_device_details(self, request: operations.UpdatePushDeviceDetailsRequest) -> operations.UpdatePushDeviceDetailsResponseOutput:
        r"""Reset a registered device's update token
        Gets an updated device details object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/push/deviceRegistrations/{device_id}/resetUpdateToken", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePushDeviceDetailsResponseOutput(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceDetailsOutput])
                res.device_details = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    