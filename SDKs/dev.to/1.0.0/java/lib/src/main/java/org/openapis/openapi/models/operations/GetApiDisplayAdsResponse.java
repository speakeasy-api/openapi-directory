/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetApiDisplayAdsResponse {
    
    public String contentType;

    public GetApiDisplayAdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * successful
     */
    
    public org.openapis.openapi.models.shared.DisplayAd[] displayAds;

    public GetApiDisplayAdsResponse withDisplayAds(org.openapis.openapi.models.shared.DisplayAd[] displayAds) {
        this.displayAds = displayAds;
        return this;
    }
    
    
    public Integer statusCode;

    public GetApiDisplayAdsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetApiDisplayAdsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetApiDisplayAdsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
