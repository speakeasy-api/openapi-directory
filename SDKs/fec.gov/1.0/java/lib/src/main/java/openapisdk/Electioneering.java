package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Electioneering {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Electioneering(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getElectioneering - 
     * An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:
     * 
     * _The communication refers to a clearly identified federal candidate._
     * 
     * _The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._
     * 
     * _The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._
     * 
    **/
    public openapisdk.models.operations.GetElectioneeringResponse getElectioneering(openapisdk.models.operations.GetElectioneeringRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/electioneering/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetElectioneeringResponse res = new openapisdk.models.operations.GetElectioneeringResponse() {{
            electioneeringPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ElectioneeringPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ElectioneeringPage.class);
                res.electioneeringPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getElectioneeringAggregates - Electioneering communications costs aggregates
    **/
    public openapisdk.models.operations.GetElectioneeringAggregatesResponse getElectioneeringAggregates(openapisdk.models.operations.GetElectioneeringAggregatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/electioneering/aggregates/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetElectioneeringAggregatesResponse res = new openapisdk.models.operations.GetElectioneeringAggregatesResponse() {{
            electioneeringByCandidatePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ElectioneeringByCandidatePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ElectioneeringByCandidatePage.class);
                res.electioneeringByCandidatePage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getElectioneeringByCandidate - Electioneering costs aggregated by candidate
    **/
    public openapisdk.models.operations.GetElectioneeringByCandidateResponse getElectioneeringByCandidate(openapisdk.models.operations.GetElectioneeringByCandidateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/electioneering/by_candidate/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetElectioneeringByCandidateResponse res = new openapisdk.models.operations.GetElectioneeringByCandidateResponse() {{
            electioneeringByCandidatePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ElectioneeringByCandidatePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ElectioneeringByCandidatePage.class);
                res.electioneeringByCandidatePage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getElectioneeringTotalsByCandidate - 
     * Total electioneering communications spent on candidates by cycle
     * or candidate election year
     * 
    **/
    public openapisdk.models.operations.GetElectioneeringTotalsByCandidateResponse getElectioneeringTotalsByCandidate(openapisdk.models.operations.GetElectioneeringTotalsByCandidateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/electioneering/totals/by_candidate/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetElectioneeringTotalsByCandidateResponse res = new openapisdk.models.operations.GetElectioneeringTotalsByCandidateResponse() {{
            ecTotalsByCandidatePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EcTotalsByCandidatePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EcTotalsByCandidatePage.class);
                res.ecTotalsByCandidatePage = out;
            }
        }

        return res;
    }
	
}