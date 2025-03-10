/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class SrcerResponse {
    
    public String contentType;

    public SrcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public SrcerResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public SrcerResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Bad request
     */
    
    public Srcer400ApplicationJSON srcer400ApplicationJSONObject;

    public SrcerResponse withSrcer400ApplicationJSONObject(Srcer400ApplicationJSON srcer400ApplicationJSONObject) {
        this.srcer400ApplicationJSONObject = srcer400ApplicationJSONObject;
        return this;
    }
    
    /**
     * Unauthorized access
     */
    
    public Srcer401ApplicationJSON srcer401ApplicationJSONObject;

    public SrcerResponse withSrcer401ApplicationJSONObject(Srcer401ApplicationJSON srcer401ApplicationJSONObject) {
        this.srcer401ApplicationJSONObject = srcer401ApplicationJSONObject;
        return this;
    }
    
    /**
     * No record found
     */
    
    public Srcer404ApplicationJSON srcer404ApplicationJSONObject;

    public SrcerResponse withSrcer404ApplicationJSONObject(Srcer404ApplicationJSON srcer404ApplicationJSONObject) {
        this.srcer404ApplicationJSONObject = srcer404ApplicationJSONObject;
        return this;
    }
    
    /**
     * Internal server error
     */
    
    public Srcer500ApplicationJSON srcer500ApplicationJSONObject;

    public SrcerResponse withSrcer500ApplicationJSONObject(Srcer500ApplicationJSON srcer500ApplicationJSONObject) {
        this.srcer500ApplicationJSONObject = srcer500ApplicationJSONObject;
        return this;
    }
    
    /**
     * Bad gateway
     */
    
    public Srcer502ApplicationJSON srcer502ApplicationJSONObject;

    public SrcerResponse withSrcer502ApplicationJSONObject(Srcer502ApplicationJSON srcer502ApplicationJSONObject) {
        this.srcer502ApplicationJSONObject = srcer502ApplicationJSONObject;
        return this;
    }
    
    /**
     * Service unavailable
     */
    
    public Srcer503ApplicationJSON srcer503ApplicationJSONObject;

    public SrcerResponse withSrcer503ApplicationJSONObject(Srcer503ApplicationJSON srcer503ApplicationJSONObject) {
        this.srcer503ApplicationJSONObject = srcer503ApplicationJSONObject;
        return this;
    }
    
    /**
     * Gateway timeout
     */
    
    public Srcer504ApplicationJSON srcer504ApplicationJSONObject;

    public SrcerResponse withSrcer504ApplicationJSONObject(Srcer504ApplicationJSON srcer504ApplicationJSONObject) {
        this.srcer504ApplicationJSONObject = srcer504ApplicationJSONObject;
        return this;
    }
    
    public SrcerResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
