package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Valuespace {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Valuespace(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * add - Add an entry to a table.
     *
     * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
    **/
    public openapisdk.models.operations.AddResponse add(openapisdk.models.operations.AddRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/add/{object}/{instance}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddResponse res = new openapisdk.models.operations.AddResponse() {{
            add200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.add200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * evalValue - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
     *
     * Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
    **/
    public openapisdk.models.operations.EvalValueResponse evalValue(openapisdk.models.operations.EvalValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/eval/{object}/{instance}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EvalValueResponse res = new openapisdk.models.operations.EvalValueResponse() {{
            evalValue200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.evalValue200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * getInfo - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
     *
     * Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
    **/
    public openapisdk.models.operations.GetInfoResponse getInfo(openapisdk.models.operations.GetInfoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/info/{object}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetInfoResponse res = new openapisdk.models.operations.GetInfoResponse() {{
            getInfo200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getInfo200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * getInstances - Display the MIB object instances for the specified object.
     *
     * This enables MIB browsing of the MIB on the current agent.
    **/
    public openapisdk.models.operations.GetInstancesResponse getInstances(openapisdk.models.operations.GetInstancesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/instances/{object}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetInstancesResponse res = new openapisdk.models.operations.GetInstancesResponse() {{
            getInstances200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.getInstances200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * getMib - Return the MIB that defines the specified object.
     *
     * This will only return a MIB name if the object is unmistakeably defined in a MIB.
    **/
    public openapisdk.models.operations.GetMibResponse getMib(openapisdk.models.operations.GetMibRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/mib/{object}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMibResponse res = new openapisdk.models.operations.GetMibResponse() {{
            getMib200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getMib200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * getName - Return the symbolic name of the specified object identifier.
     *
     * Return the symbolic name of the specified object identifier.
    **/
    public openapisdk.models.operations.GetNameResponse getName(openapisdk.models.operations.GetNameRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/name/{OID}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNameResponse res = new openapisdk.models.operations.GetNameResponse() {{
            getName200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getName200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * getObjects - Display the MIB objects below the current position
     *
     * This command is similar to the ls or dir operating system commands to list filesystem directories.
    **/
    public openapisdk.models.operations.GetObjectsResponse getObjects(openapisdk.models.operations.GetObjectsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/list/{OID}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetObjectsResponse res = new openapisdk.models.operations.GetObjectsResponse() {{
            getObjects200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.getObjects200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * getOid - Return the numeric OID of the specified object.
     *
     * Return the numeric OID of the specified object.
    **/
    public openapisdk.models.operations.GetOidResponse getOid(openapisdk.models.operations.GetOidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/oid/{object}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOidResponse res = new openapisdk.models.operations.GetOidResponse() {{
            getOid200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getOid200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * getState - Get the state of a MIB object object.
     *
     * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
    **/
    public openapisdk.models.operations.GetStateResponse getState(openapisdk.models.operations.GetStateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/state/get/{object}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetStateResponse res = new openapisdk.models.operations.GetStateResponse() {{
            getState200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getState200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * getValue - Get a variable in the Value Space.
     *
     * Get a variable in the Value Space.
    **/
    public openapisdk.models.operations.GetValueResponse getValue(openapisdk.models.operations.GetValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/get/{object}/{instance}/{variable}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetValueResponse res = new openapisdk.models.operations.GetValueResponse() {{
            getValue200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getValue200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * getVariables - Display the variables for the specified instance instance for the specified MIB object object
     *
     * This enables variable browsing of the MIB on the current agent.
    **/
    public openapisdk.models.operations.GetVariablesResponse getVariables(openapisdk.models.operations.GetVariablesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/variables/{object}/{instance}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVariablesResponse res = new openapisdk.models.operations.GetVariablesResponse() {{
            getVariables200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.getVariables200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * msetValue - Set multiple variables in the Value Space.
     *
     * This is a performance optimization of the mimic value set command, to be used when many variables are to be set.
    **/
    public openapisdk.models.operations.MsetValueResponse msetValue(openapisdk.models.operations.MsetValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/mset", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MsetValueResponse res = new openapisdk.models.operations.MsetValueResponse() {{
            msetValue200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.msetValue200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * munsetValue - Unset multiple variables in the Value Space
     *
     * This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.
    **/
    public openapisdk.models.operations.MunsetValueResponse munsetValue(openapisdk.models.operations.MunsetValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/munset", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MunsetValueResponse res = new openapisdk.models.operations.MunsetValueResponse() {{
            munsetValue200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.munsetValue200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * remove - Remove an entry from a table.
     *
     * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
    **/
    public openapisdk.models.operations.RemoveResponse remove(openapisdk.models.operations.RemoveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/remove/{object}/{instance}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RemoveResponse res = new openapisdk.models.operations.RemoveResponse() {{
            remove200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.remove200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * setState - Set the state of a MIB object object
     *
     * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
    **/
    public openapisdk.models.operations.SetStateResponse setState(openapisdk.models.operations.SetStateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/state/set/{object}/{state}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SetStateResponse res = new openapisdk.models.operations.SetStateResponse() {{
            setState200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.setState200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * setValue - Set a variable in the Value Space.
     *
     * NOTE to set a binary string value, specify a string starting with \\x followed by pairs of hexadecimal digits, eg. "\\x 01 23 45". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - "1", "2c", "2" and "3". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.
    **/
    public openapisdk.models.operations.SetValueResponse setValue(openapisdk.models.operations.SetValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/set/{object}/{instance}/{variable}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SetValueResponse res = new openapisdk.models.operations.SetValueResponse() {{
            setValue200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.setValue200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * splitOid - Split the numerical OID into the object OID and instance OID.
     *
     * This is useful if you have an OID which is a combination of object and instance.
    **/
    public openapisdk.models.operations.SplitOidResponse splitOid(openapisdk.models.operations.SplitOidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/split/{OID}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SplitOidResponse res = new openapisdk.models.operations.SplitOidResponse() {{
            splitOid200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.splitOid200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * unsetValue - Unset a variable in the Value Space in order to free its memory.
     *
     * Only variables that have previously been set can be unset.
    **/
    public openapisdk.models.operations.UnsetValueResponse unsetValue(openapisdk.models.operations.UnsetValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/value/unset/{object}/{instance}/{variable}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UnsetValueResponse res = new openapisdk.models.operations.UnsetValueResponse() {{
            unsetValue200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.unsetValue200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
}