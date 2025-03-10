/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class SalesCreditNotesPostResponse {
    
    public String contentType;

    public SalesCreditNotesPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public java.util.Map<String, Object> salesCreditNotesPost200ApplicationJSONObject;

    public SalesCreditNotesPostResponse withSalesCreditNotesPost200ApplicationJSONObject(java.util.Map<String, Object> salesCreditNotesPost200ApplicationJSONObject) {
        this.salesCreditNotesPost200ApplicationJSONObject = salesCreditNotesPost200ApplicationJSONObject;
        return this;
    }
    
    
    public Integer statusCode;

    public SalesCreditNotesPostResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public SalesCreditNotesPostResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public SalesCreditNotesPostResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
