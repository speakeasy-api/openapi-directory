/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ConsentFormsListResponse {
    
    public String contentType;

    public ConsentFormsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ConsentFormsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ConsentFormsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public ConsentFormsList200ApplicationJSON consentFormsList200ApplicationJSONObject;

    public ConsentFormsListResponse withConsentFormsList200ApplicationJSONObject(ConsentFormsList200ApplicationJSON consentFormsList200ApplicationJSONObject) {
        this.consentFormsList200ApplicationJSONObject = consentFormsList200ApplicationJSONObject;
        return this;
    }
    
    public ConsentFormsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
