package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Vehicles {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Vehicles(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getVehicleChargestate - Get Vehicle Charge State
    **/
    public openapisdk.models.operations.GetVehicleChargestateResponse getVehicleChargestate(openapisdk.models.operations.GetVehicleChargestateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vehicles/{vehicleId}/charge-state", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVehicleChargestateResponse res = new openapisdk.models.operations.GetVehicleChargestateResponse() {{
            getVehicleChargestate200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetVehicleChargestate200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetVehicleChargestate200ApplicationJson.class);
                res.getVehicleChargestate200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getVehicles - List Vehicles
    **/
    public openapisdk.models.operations.GetVehiclesResponse getVehicles(openapisdk.models.operations.GetVehiclesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vehicles");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVehiclesResponse res = new openapisdk.models.operations.GetVehiclesResponse() {{
            onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchemas = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema[].class);
                res.onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchemas = out;
            }
        }

        return res;
    }
	
	
    /**
     * getVehiclesVehicleid - Get Vehicle
    **/
    public openapisdk.models.operations.GetVehiclesVehicleidResponse getVehiclesVehicleid(openapisdk.models.operations.GetVehiclesVehicleidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vehicles/{vehicleId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVehiclesVehicleidResponse res = new openapisdk.models.operations.GetVehiclesVehicleidResponse() {{
            getVehiclesVehicleid200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetVehiclesVehicleid200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetVehiclesVehicleid200ApplicationJson.class);
                res.getVehiclesVehicleid200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getVehiclesVehicleidInformation - Get Vehicle Information
    **/
    public openapisdk.models.operations.GetVehiclesVehicleidInformationResponse getVehiclesVehicleidInformation(openapisdk.models.operations.GetVehiclesVehicleidInformationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vehicles/{vehicleId}/information", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVehiclesVehicleidInformationResponse res = new openapisdk.models.operations.GetVehiclesVehicleidInformationResponse() {{
            getVehiclesVehicleidInformation200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetVehiclesVehicleidInformation200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetVehiclesVehicleidInformation200ApplicationJson.class);
                res.getVehiclesVehicleidInformation200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getVehiclesVehicleidLocation - Get Vehicle Location
    **/
    public openapisdk.models.operations.GetVehiclesVehicleidLocationResponse getVehiclesVehicleidLocation(openapisdk.models.operations.GetVehiclesVehicleidLocationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vehicles/{vehicleId}/location", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVehiclesVehicleidLocationResponse res = new openapisdk.models.operations.GetVehiclesVehicleidLocationResponse() {{
            getVehiclesVehicleidLocation200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetVehiclesVehicleidLocation200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetVehiclesVehicleidLocation200ApplicationJson.class);
                res.getVehiclesVehicleidLocation200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getVehiclesVehicleidOdometer - Get Vehicle Odometer
    **/
    public openapisdk.models.operations.GetVehiclesVehicleidOdometerResponse getVehiclesVehicleidOdometer(openapisdk.models.operations.GetVehiclesVehicleidOdometerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vehicles/{vehicleId}/odometer", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVehiclesVehicleidOdometerResponse res = new openapisdk.models.operations.GetVehiclesVehicleidOdometerResponse() {{
            getVehiclesVehicleidOdometer200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetVehiclesVehicleidOdometer200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetVehiclesVehicleidOdometer200ApplicationJson.class);
                res.getVehiclesVehicleidOdometer200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getVehiclesVehicleidSmartchargingpolicy - Get Vehicle Smart Charging Policy
    **/
    public openapisdk.models.operations.GetVehiclesVehicleidSmartchargingpolicyResponse getVehiclesVehicleidSmartchargingpolicy(openapisdk.models.operations.GetVehiclesVehicleidSmartchargingpolicyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vehicles/{vehicleId}/smart-charging-policy", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVehiclesVehicleidSmartchargingpolicyResponse res = new openapisdk.models.operations.GetVehiclesVehicleidSmartchargingpolicyResponse() {{
            onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema.class);
                res.onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
	
    /**
     * postVehiclesVehicleidCharging - Start / Stop Charging
     *
     * Instruct the vehicle to start or stop charging. 
     * 
     * #### Precedence over smart charging
     * If the vehicle is at a charging location where smart charging is activated:
     * - a request to `start` charging will override smart charging and charging will stay on until fully charged. 
     * - a request to `stop` charging will override smart charging and charging will be kept off for the duration of the current smart charging cycle.
     * 
     * The smart charging settings are not altered by these actions.
    **/
    public openapisdk.models.operations.PostVehiclesVehicleidChargingResponse postVehiclesVehicleidCharging(openapisdk.models.operations.PostVehiclesVehicleidChargingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vehicles/{vehicleId}/charging", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostVehiclesVehicleidChargingResponse res = new openapisdk.models.operations.PostVehiclesVehicleidChargingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * postVehiclesVehicleidWatch - Start Watching Vehicle
     *
     * Temporarily triggers high-rate updates of the vehicle's properties, and this state expires automatically. This gives you a way to tell us that user may be interacting with your application and are expecting as-fast-as-possible updates on the status of their vehicle in your UI.
     * 
     * Any data changes resulting from this high-rate updating are reflected everywhere, whether you pull data from the `Vehicles` endpoint, or recieve it via the [Firehose Webhook](#tag/Webhooks)
     * 
     * The specifics of the expiration times, watch behaviors, and change thresholds are tuned by us to make sure that they work as expected, without causing undue interruption to the vehicle. For many vendors, it is not appropriate to let the high-rate monitoring last indefinitely, as it will keep systems within the car awake that should be allowed to fall into low-power/standby modes.
     * 
    **/
    public openapisdk.models.operations.PostVehiclesVehicleidWatchResponse postVehiclesVehicleidWatch(openapisdk.models.operations.PostVehiclesVehicleidWatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vehicles/{vehicleId}/watch", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostVehiclesVehicleidWatchResponse res = new openapisdk.models.operations.PostVehiclesVehicleidWatchResponse() {{
            onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema.class);
                res.onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
	
    /**
     * putVehiclesVehicleidSmartchargingpolicy - Update Vehicle Smart Charging Policy
     *
     * Updates the Smart Charging settings for a vehicle
    **/
    public openapisdk.models.operations.PutVehiclesVehicleidSmartchargingpolicyResponse putVehiclesVehicleidSmartchargingpolicy(openapisdk.models.operations.PutVehiclesVehicleidSmartchargingpolicyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/vehicles/{vehicleId}/smart-charging-policy", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutVehiclesVehicleidSmartchargingpolicyResponse res = new openapisdk.models.operations.PutVehiclesVehicleidSmartchargingpolicyResponse() {{
            onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema.class);
                res.onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
}