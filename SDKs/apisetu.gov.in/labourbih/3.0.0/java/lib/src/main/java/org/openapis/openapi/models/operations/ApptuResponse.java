/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ApptuResponse {
    
    public String contentType;

    public ApptuResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ApptuResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ApptuResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Bad request
     */
    
    public Apptu400ApplicationJSON apptu400ApplicationJSONObject;

    public ApptuResponse withApptu400ApplicationJSONObject(Apptu400ApplicationJSON apptu400ApplicationJSONObject) {
        this.apptu400ApplicationJSONObject = apptu400ApplicationJSONObject;
        return this;
    }
    
    /**
     * Unauthorized access
     */
    
    public Apptu401ApplicationJSON apptu401ApplicationJSONObject;

    public ApptuResponse withApptu401ApplicationJSONObject(Apptu401ApplicationJSON apptu401ApplicationJSONObject) {
        this.apptu401ApplicationJSONObject = apptu401ApplicationJSONObject;
        return this;
    }
    
    /**
     * No record found
     */
    
    public Apptu404ApplicationJSON apptu404ApplicationJSONObject;

    public ApptuResponse withApptu404ApplicationJSONObject(Apptu404ApplicationJSON apptu404ApplicationJSONObject) {
        this.apptu404ApplicationJSONObject = apptu404ApplicationJSONObject;
        return this;
    }
    
    /**
     * Internal server error
     */
    
    public Apptu500ApplicationJSON apptu500ApplicationJSONObject;

    public ApptuResponse withApptu500ApplicationJSONObject(Apptu500ApplicationJSON apptu500ApplicationJSONObject) {
        this.apptu500ApplicationJSONObject = apptu500ApplicationJSONObject;
        return this;
    }
    
    /**
     * Bad gateway
     */
    
    public Apptu502ApplicationJSON apptu502ApplicationJSONObject;

    public ApptuResponse withApptu502ApplicationJSONObject(Apptu502ApplicationJSON apptu502ApplicationJSONObject) {
        this.apptu502ApplicationJSONObject = apptu502ApplicationJSONObject;
        return this;
    }
    
    /**
     * Service unavailable
     */
    
    public Apptu503ApplicationJSON apptu503ApplicationJSONObject;

    public ApptuResponse withApptu503ApplicationJSONObject(Apptu503ApplicationJSON apptu503ApplicationJSONObject) {
        this.apptu503ApplicationJSONObject = apptu503ApplicationJSONObject;
        return this;
    }
    
    /**
     * Gateway timeout
     */
    
    public Apptu504ApplicationJSON apptu504ApplicationJSONObject;

    public ApptuResponse withApptu504ApplicationJSONObject(Apptu504ApplicationJSON apptu504ApplicationJSONObject) {
        this.apptu504ApplicationJSONObject = apptu504ApplicationJSONObject;
        return this;
    }
    
    public ApptuResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
