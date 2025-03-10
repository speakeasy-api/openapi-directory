/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class SalesEntriesDeleteResponse {
    
    public String contentType;

    public SalesEntriesDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public java.util.Map<String, Object> salesEntriesDelete200ApplicationJSONObject;

    public SalesEntriesDeleteResponse withSalesEntriesDelete200ApplicationJSONObject(java.util.Map<String, Object> salesEntriesDelete200ApplicationJSONObject) {
        this.salesEntriesDelete200ApplicationJSONObject = salesEntriesDelete200ApplicationJSONObject;
        return this;
    }
    
    
    public Integer statusCode;

    public SalesEntriesDeleteResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public SalesEntriesDeleteResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public SalesEntriesDeleteResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
