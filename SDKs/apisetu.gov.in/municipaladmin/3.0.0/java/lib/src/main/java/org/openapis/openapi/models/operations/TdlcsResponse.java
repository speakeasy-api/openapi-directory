/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class TdlcsResponse {
    
    public String contentType;

    public TdlcsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public TdlcsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public TdlcsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Bad request
     */
    
    public Tdlcs400ApplicationJSON tdlcs400ApplicationJSONObject;

    public TdlcsResponse withTdlcs400ApplicationJSONObject(Tdlcs400ApplicationJSON tdlcs400ApplicationJSONObject) {
        this.tdlcs400ApplicationJSONObject = tdlcs400ApplicationJSONObject;
        return this;
    }
    
    /**
     * Unauthorized access
     */
    
    public Tdlcs401ApplicationJSON tdlcs401ApplicationJSONObject;

    public TdlcsResponse withTdlcs401ApplicationJSONObject(Tdlcs401ApplicationJSON tdlcs401ApplicationJSONObject) {
        this.tdlcs401ApplicationJSONObject = tdlcs401ApplicationJSONObject;
        return this;
    }
    
    /**
     * No record found
     */
    
    public Tdlcs404ApplicationJSON tdlcs404ApplicationJSONObject;

    public TdlcsResponse withTdlcs404ApplicationJSONObject(Tdlcs404ApplicationJSON tdlcs404ApplicationJSONObject) {
        this.tdlcs404ApplicationJSONObject = tdlcs404ApplicationJSONObject;
        return this;
    }
    
    /**
     * Internal server error
     */
    
    public Tdlcs500ApplicationJSON tdlcs500ApplicationJSONObject;

    public TdlcsResponse withTdlcs500ApplicationJSONObject(Tdlcs500ApplicationJSON tdlcs500ApplicationJSONObject) {
        this.tdlcs500ApplicationJSONObject = tdlcs500ApplicationJSONObject;
        return this;
    }
    
    /**
     * Bad gateway
     */
    
    public Tdlcs502ApplicationJSON tdlcs502ApplicationJSONObject;

    public TdlcsResponse withTdlcs502ApplicationJSONObject(Tdlcs502ApplicationJSON tdlcs502ApplicationJSONObject) {
        this.tdlcs502ApplicationJSONObject = tdlcs502ApplicationJSONObject;
        return this;
    }
    
    /**
     * Service unavailable
     */
    
    public Tdlcs503ApplicationJSON tdlcs503ApplicationJSONObject;

    public TdlcsResponse withTdlcs503ApplicationJSONObject(Tdlcs503ApplicationJSON tdlcs503ApplicationJSONObject) {
        this.tdlcs503ApplicationJSONObject = tdlcs503ApplicationJSONObject;
        return this;
    }
    
    /**
     * Gateway timeout
     */
    
    public Tdlcs504ApplicationJSON tdlcs504ApplicationJSONObject;

    public TdlcsResponse withTdlcs504ApplicationJSONObject(Tdlcs504ApplicationJSON tdlcs504ApplicationJSONObject) {
        this.tdlcs504ApplicationJSONObject = tdlcs504ApplicationJSONObject;
        return this;
    }
    
    public TdlcsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
