/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class Listsubscribedaddresses4Response {
    
    public String contentType;

    public Listsubscribedaddresses4Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public Listsubscribedaddresses4Response withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public Listsubscribedaddresses4Response withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public Listsubscribedaddresses4Response withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * listSubscribedAddresses
     */
    
    public Listsubscribedaddresses4200ApplicationJSON listsubscribedaddresses4200ApplicationJSONObject;

    public Listsubscribedaddresses4Response withListsubscribedaddresses4200ApplicationJSONObject(Listsubscribedaddresses4200ApplicationJSON listsubscribedaddresses4200ApplicationJSONObject) {
        this.listsubscribedaddresses4200ApplicationJSONObject = listsubscribedaddresses4200ApplicationJSONObject;
        return this;
    }
    
    public Listsubscribedaddresses4Response(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
