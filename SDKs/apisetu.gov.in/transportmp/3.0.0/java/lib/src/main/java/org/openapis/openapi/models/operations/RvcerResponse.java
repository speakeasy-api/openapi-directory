/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class RvcerResponse {
    
    public byte[] body;

    public RvcerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public RvcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public RvcerResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public RvcerResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Bad request
     */
    
    public Rvcer400ApplicationJSON rvcer400ApplicationJSONObject;

    public RvcerResponse withRvcer400ApplicationJSONObject(Rvcer400ApplicationJSON rvcer400ApplicationJSONObject) {
        this.rvcer400ApplicationJSONObject = rvcer400ApplicationJSONObject;
        return this;
    }
    
    /**
     * Unauthorized access
     */
    
    public Rvcer401ApplicationJSON rvcer401ApplicationJSONObject;

    public RvcerResponse withRvcer401ApplicationJSONObject(Rvcer401ApplicationJSON rvcer401ApplicationJSONObject) {
        this.rvcer401ApplicationJSONObject = rvcer401ApplicationJSONObject;
        return this;
    }
    
    /**
     * No record found
     */
    
    public Rvcer404ApplicationJSON rvcer404ApplicationJSONObject;

    public RvcerResponse withRvcer404ApplicationJSONObject(Rvcer404ApplicationJSON rvcer404ApplicationJSONObject) {
        this.rvcer404ApplicationJSONObject = rvcer404ApplicationJSONObject;
        return this;
    }
    
    /**
     * Internal server error
     */
    
    public Rvcer500ApplicationJSON rvcer500ApplicationJSONObject;

    public RvcerResponse withRvcer500ApplicationJSONObject(Rvcer500ApplicationJSON rvcer500ApplicationJSONObject) {
        this.rvcer500ApplicationJSONObject = rvcer500ApplicationJSONObject;
        return this;
    }
    
    /**
     * Bad gateway
     */
    
    public Rvcer502ApplicationJSON rvcer502ApplicationJSONObject;

    public RvcerResponse withRvcer502ApplicationJSONObject(Rvcer502ApplicationJSON rvcer502ApplicationJSONObject) {
        this.rvcer502ApplicationJSONObject = rvcer502ApplicationJSONObject;
        return this;
    }
    
    /**
     * Service unavailable
     */
    
    public Rvcer503ApplicationJSON rvcer503ApplicationJSONObject;

    public RvcerResponse withRvcer503ApplicationJSONObject(Rvcer503ApplicationJSON rvcer503ApplicationJSONObject) {
        this.rvcer503ApplicationJSONObject = rvcer503ApplicationJSONObject;
        return this;
    }
    
    /**
     * Gateway timeout
     */
    
    public Rvcer504ApplicationJSON rvcer504ApplicationJSONObject;

    public RvcerResponse withRvcer504ApplicationJSONObject(Rvcer504ApplicationJSON rvcer504ApplicationJSONObject) {
        this.rvcer504ApplicationJSONObject = rvcer504ApplicationJSONObject;
        return this;
    }
    
    public RvcerResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
