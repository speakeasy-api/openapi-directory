/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class EwcerResponse {
    
    public String contentType;

    public EwcerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public EwcerResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public EwcerResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Bad request
     */
    
    public Ewcer400ApplicationJSON ewcer400ApplicationJSONObject;

    public EwcerResponse withEwcer400ApplicationJSONObject(Ewcer400ApplicationJSON ewcer400ApplicationJSONObject) {
        this.ewcer400ApplicationJSONObject = ewcer400ApplicationJSONObject;
        return this;
    }
    
    /**
     * Unauthorized access
     */
    
    public Ewcer401ApplicationJSON ewcer401ApplicationJSONObject;

    public EwcerResponse withEwcer401ApplicationJSONObject(Ewcer401ApplicationJSON ewcer401ApplicationJSONObject) {
        this.ewcer401ApplicationJSONObject = ewcer401ApplicationJSONObject;
        return this;
    }
    
    /**
     * No record found
     */
    
    public Ewcer404ApplicationJSON ewcer404ApplicationJSONObject;

    public EwcerResponse withEwcer404ApplicationJSONObject(Ewcer404ApplicationJSON ewcer404ApplicationJSONObject) {
        this.ewcer404ApplicationJSONObject = ewcer404ApplicationJSONObject;
        return this;
    }
    
    /**
     * Internal server error
     */
    
    public Ewcer500ApplicationJSON ewcer500ApplicationJSONObject;

    public EwcerResponse withEwcer500ApplicationJSONObject(Ewcer500ApplicationJSON ewcer500ApplicationJSONObject) {
        this.ewcer500ApplicationJSONObject = ewcer500ApplicationJSONObject;
        return this;
    }
    
    /**
     * Bad gateway
     */
    
    public Ewcer502ApplicationJSON ewcer502ApplicationJSONObject;

    public EwcerResponse withEwcer502ApplicationJSONObject(Ewcer502ApplicationJSON ewcer502ApplicationJSONObject) {
        this.ewcer502ApplicationJSONObject = ewcer502ApplicationJSONObject;
        return this;
    }
    
    /**
     * Service unavailable
     */
    
    public Ewcer503ApplicationJSON ewcer503ApplicationJSONObject;

    public EwcerResponse withEwcer503ApplicationJSONObject(Ewcer503ApplicationJSON ewcer503ApplicationJSONObject) {
        this.ewcer503ApplicationJSONObject = ewcer503ApplicationJSONObject;
        return this;
    }
    
    /**
     * Gateway timeout
     */
    
    public Ewcer504ApplicationJSON ewcer504ApplicationJSONObject;

    public EwcerResponse withEwcer504ApplicationJSONObject(Ewcer504ApplicationJSON ewcer504ApplicationJSONObject) {
        this.ewcer504ApplicationJSONObject = ewcer504ApplicationJSONObject;
        return this;
    }
    
    public EwcerResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
