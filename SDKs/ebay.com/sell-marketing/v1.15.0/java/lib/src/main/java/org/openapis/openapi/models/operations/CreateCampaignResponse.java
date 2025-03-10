/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateCampaignResponse {
    
    public String contentType;

    public CreateCampaignResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public CreateCampaignResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateCampaignResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateCampaignResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Created
     */
    
    public java.util.Map<String, Object> createCampaign201ApplicationJSONObject;

    public CreateCampaignResponse withCreateCampaign201ApplicationJSONObject(java.util.Map<String, Object> createCampaign201ApplicationJSONObject) {
        this.createCampaign201ApplicationJSONObject = createCampaign201ApplicationJSONObject;
        return this;
    }
    
    public CreateCampaignResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
