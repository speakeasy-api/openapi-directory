/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class LpgtvResponse {
    
    public String contentType;

    public LpgtvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public LpgtvResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public LpgtvResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Bad request
     */
    
    public Lpgtv400ApplicationJSON lpgtv400ApplicationJSONObject;

    public LpgtvResponse withLpgtv400ApplicationJSONObject(Lpgtv400ApplicationJSON lpgtv400ApplicationJSONObject) {
        this.lpgtv400ApplicationJSONObject = lpgtv400ApplicationJSONObject;
        return this;
    }
    
    /**
     * Unauthorized access
     */
    
    public Lpgtv401ApplicationJSON lpgtv401ApplicationJSONObject;

    public LpgtvResponse withLpgtv401ApplicationJSONObject(Lpgtv401ApplicationJSON lpgtv401ApplicationJSONObject) {
        this.lpgtv401ApplicationJSONObject = lpgtv401ApplicationJSONObject;
        return this;
    }
    
    /**
     * No record found
     */
    
    public Lpgtv404ApplicationJSON lpgtv404ApplicationJSONObject;

    public LpgtvResponse withLpgtv404ApplicationJSONObject(Lpgtv404ApplicationJSON lpgtv404ApplicationJSONObject) {
        this.lpgtv404ApplicationJSONObject = lpgtv404ApplicationJSONObject;
        return this;
    }
    
    /**
     * Internal server error
     */
    
    public Lpgtv500ApplicationJSON lpgtv500ApplicationJSONObject;

    public LpgtvResponse withLpgtv500ApplicationJSONObject(Lpgtv500ApplicationJSON lpgtv500ApplicationJSONObject) {
        this.lpgtv500ApplicationJSONObject = lpgtv500ApplicationJSONObject;
        return this;
    }
    
    /**
     * Bad gateway
     */
    
    public Lpgtv502ApplicationJSON lpgtv502ApplicationJSONObject;

    public LpgtvResponse withLpgtv502ApplicationJSONObject(Lpgtv502ApplicationJSON lpgtv502ApplicationJSONObject) {
        this.lpgtv502ApplicationJSONObject = lpgtv502ApplicationJSONObject;
        return this;
    }
    
    /**
     * Service unavailable
     */
    
    public Lpgtv503ApplicationJSON lpgtv503ApplicationJSONObject;

    public LpgtvResponse withLpgtv503ApplicationJSONObject(Lpgtv503ApplicationJSON lpgtv503ApplicationJSONObject) {
        this.lpgtv503ApplicationJSONObject = lpgtv503ApplicationJSONObject;
        return this;
    }
    
    /**
     * Gateway timeout
     */
    
    public Lpgtv504ApplicationJSON lpgtv504ApplicationJSONObject;

    public LpgtvResponse withLpgtv504ApplicationJSONObject(Lpgtv504ApplicationJSON lpgtv504ApplicationJSONObject) {
        this.lpgtv504ApplicationJSONObject = lpgtv504ApplicationJSONObject;
        return this;
    }
    
    public LpgtvResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
