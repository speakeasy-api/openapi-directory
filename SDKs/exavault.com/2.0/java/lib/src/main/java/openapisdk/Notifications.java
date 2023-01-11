package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Notifications {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Notifications(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * addNotification - Create a new notification
     *
     * Create a new notification for a [resource](#section/Identifying-Resources) in your account. Notifications can be sent via email or webhook;
     * 
     * - To enable email, pass an array of email addresses to the `recipients` parameter of this call. 
     * - To enable webhooks, setup the webhook callback URL in your account settings via [PATCH /account](#operation/updateAccount). 
     * 
     * **Notes:**
     *   - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)
     * 
    **/
    public openapisdk.models.operations.AddNotificationResponse addNotification(openapisdk.models.operations.AddNotificationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/notifications");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddNotificationResponse res = new openapisdk.models.operations.AddNotificationResponse() {{
            notificationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NotificationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NotificationResponse.class);
                res.notificationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteNotificationById - Delete a notification
     *
     * Deletes a notification. Note that deleting a notification _only_ deletes the notification &ndash; it does not delete any underlying files or folders.
     * 
     * **Notes:**
     * 
     * - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.
     * - You can only delete notifications owned by your user account.
    **/
    public openapisdk.models.operations.DeleteNotificationByIdResponse deleteNotificationById(openapisdk.models.operations.DeleteNotificationByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/notifications/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNotificationByIdResponse res = new openapisdk.models.operations.DeleteNotificationByIdResponse() {{
            emptyResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EmptyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EmptyResponse.class);
                res.emptyResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNotificationById - Get notification details
     *
     * Get the details for a notification with a specific ID number. You'll be able to review its path, triggers and who's getting the notification. 
     * 
     * **Notes**
     * 
     * - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to view the detail for a notification.
     * - You can only retrieve notifications owned by your user account.
    **/
    public openapisdk.models.operations.GetNotificationByIdResponse getNotificationById(openapisdk.models.operations.GetNotificationByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/notifications/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNotificationByIdResponse res = new openapisdk.models.operations.GetNotificationByIdResponse() {{
            notificationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NotificationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NotificationResponse.class);
                res.notificationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listNotifications - Get a list of notifications
     *
     * Get a list of all the [notifications](/docs/account/06-notifications) you have access to. You can use sorting and filtering to limit the returned list.
     * 
     * **Notes:**
     *   - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)
    **/
    public openapisdk.models.operations.ListNotificationsResponse listNotifications(openapisdk.models.operations.ListNotificationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/notifications");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListNotificationsResponse res = new openapisdk.models.operations.ListNotificationsResponse() {{
            notificationCollectionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NotificationCollectionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NotificationCollectionResponse.class);
                res.notificationCollectionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNotificationById - Update a notification
     *
     * Update an existing notification. You can add additional emails or change the action or users that cause a notification to trigger. 
     * 
     * When updating recipient emails, make sure your `recipients` parameter contains the full list of people who should be included on the notification. If you resend the list without an existing recipient, they will be deleted from the notification emails. 
     * 
     * **Notes:**
     * 
     * - You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.
     * - You can only change notifications owned by your user account.
    **/
    public openapisdk.models.operations.UpdateNotificationByIdResponse updateNotificationById(openapisdk.models.operations.UpdateNotificationByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/notifications/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNotificationByIdResponse res = new openapisdk.models.operations.UpdateNotificationByIdResponse() {{
            notificationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NotificationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NotificationResponse.class);
                res.notificationResponse = out;
            }
        }

        return res;
    }
	
}