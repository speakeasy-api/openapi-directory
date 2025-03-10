/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CecerResponse {
    
    public String contentType;

    public CecerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public CecerResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CecerResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Bad request
     */
    
    public Cecer400ApplicationJSON cecer400ApplicationJSONObject;

    public CecerResponse withCecer400ApplicationJSONObject(Cecer400ApplicationJSON cecer400ApplicationJSONObject) {
        this.cecer400ApplicationJSONObject = cecer400ApplicationJSONObject;
        return this;
    }
    
    /**
     * Unauthorized access
     */
    
    public Cecer401ApplicationJSON cecer401ApplicationJSONObject;

    public CecerResponse withCecer401ApplicationJSONObject(Cecer401ApplicationJSON cecer401ApplicationJSONObject) {
        this.cecer401ApplicationJSONObject = cecer401ApplicationJSONObject;
        return this;
    }
    
    /**
     * No record found
     */
    
    public Cecer404ApplicationJSON cecer404ApplicationJSONObject;

    public CecerResponse withCecer404ApplicationJSONObject(Cecer404ApplicationJSON cecer404ApplicationJSONObject) {
        this.cecer404ApplicationJSONObject = cecer404ApplicationJSONObject;
        return this;
    }
    
    /**
     * Internal server error
     */
    
    public Cecer500ApplicationJSON cecer500ApplicationJSONObject;

    public CecerResponse withCecer500ApplicationJSONObject(Cecer500ApplicationJSON cecer500ApplicationJSONObject) {
        this.cecer500ApplicationJSONObject = cecer500ApplicationJSONObject;
        return this;
    }
    
    /**
     * Bad gateway
     */
    
    public Cecer502ApplicationJSON cecer502ApplicationJSONObject;

    public CecerResponse withCecer502ApplicationJSONObject(Cecer502ApplicationJSON cecer502ApplicationJSONObject) {
        this.cecer502ApplicationJSONObject = cecer502ApplicationJSONObject;
        return this;
    }
    
    /**
     * Service unavailable
     */
    
    public Cecer503ApplicationJSON cecer503ApplicationJSONObject;

    public CecerResponse withCecer503ApplicationJSONObject(Cecer503ApplicationJSON cecer503ApplicationJSONObject) {
        this.cecer503ApplicationJSONObject = cecer503ApplicationJSONObject;
        return this;
    }
    
    /**
     * Gateway timeout
     */
    
    public Cecer504ApplicationJSON cecer504ApplicationJSONObject;

    public CecerResponse withCecer504ApplicationJSONObject(Cecer504ApplicationJSON cecer504ApplicationJSONObject) {
        this.cecer504ApplicationJSONObject = cecer504ApplicationJSONObject;
        return this;
    }
    
    public CecerResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
