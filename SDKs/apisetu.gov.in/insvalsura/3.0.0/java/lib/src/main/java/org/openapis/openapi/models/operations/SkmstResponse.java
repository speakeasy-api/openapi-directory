/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class SkmstResponse {
    
    public String contentType;

    public SkmstResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public SkmstResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public SkmstResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Bad request
     */
    
    public Skmst400ApplicationJSON skmst400ApplicationJSONObject;

    public SkmstResponse withSkmst400ApplicationJSONObject(Skmst400ApplicationJSON skmst400ApplicationJSONObject) {
        this.skmst400ApplicationJSONObject = skmst400ApplicationJSONObject;
        return this;
    }
    
    /**
     * Unauthorized access
     */
    
    public Skmst401ApplicationJSON skmst401ApplicationJSONObject;

    public SkmstResponse withSkmst401ApplicationJSONObject(Skmst401ApplicationJSON skmst401ApplicationJSONObject) {
        this.skmst401ApplicationJSONObject = skmst401ApplicationJSONObject;
        return this;
    }
    
    /**
     * No record found
     */
    
    public Skmst404ApplicationJSON skmst404ApplicationJSONObject;

    public SkmstResponse withSkmst404ApplicationJSONObject(Skmst404ApplicationJSON skmst404ApplicationJSONObject) {
        this.skmst404ApplicationJSONObject = skmst404ApplicationJSONObject;
        return this;
    }
    
    /**
     * Internal server error
     */
    
    public Skmst500ApplicationJSON skmst500ApplicationJSONObject;

    public SkmstResponse withSkmst500ApplicationJSONObject(Skmst500ApplicationJSON skmst500ApplicationJSONObject) {
        this.skmst500ApplicationJSONObject = skmst500ApplicationJSONObject;
        return this;
    }
    
    /**
     * Bad gateway
     */
    
    public Skmst502ApplicationJSON skmst502ApplicationJSONObject;

    public SkmstResponse withSkmst502ApplicationJSONObject(Skmst502ApplicationJSON skmst502ApplicationJSONObject) {
        this.skmst502ApplicationJSONObject = skmst502ApplicationJSONObject;
        return this;
    }
    
    /**
     * Service unavailable
     */
    
    public Skmst503ApplicationJSON skmst503ApplicationJSONObject;

    public SkmstResponse withSkmst503ApplicationJSONObject(Skmst503ApplicationJSON skmst503ApplicationJSONObject) {
        this.skmst503ApplicationJSONObject = skmst503ApplicationJSONObject;
        return this;
    }
    
    /**
     * Gateway timeout
     */
    
    public Skmst504ApplicationJSON skmst504ApplicationJSONObject;

    public SkmstResponse withSkmst504ApplicationJSONObject(Skmst504ApplicationJSON skmst504ApplicationJSONObject) {
        this.skmst504ApplicationJSONObject = skmst504ApplicationJSONObject;
        return this;
    }
    
    public SkmstResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
