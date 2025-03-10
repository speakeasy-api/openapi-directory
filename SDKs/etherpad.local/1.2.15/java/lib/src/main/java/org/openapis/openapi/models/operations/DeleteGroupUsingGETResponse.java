/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DeleteGroupUsingGETResponse {
    
    public String contentType;

    public DeleteGroupUsingGETResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public DeleteGroupUsingGETResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DeleteGroupUsingGETResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ok (code 0)
     */
    
    public DeleteGroupUsingGET200ApplicationJSON deleteGroupUsingGET200ApplicationJSONObject;

    public DeleteGroupUsingGETResponse withDeleteGroupUsingGET200ApplicationJSONObject(DeleteGroupUsingGET200ApplicationJSON deleteGroupUsingGET200ApplicationJSONObject) {
        this.deleteGroupUsingGET200ApplicationJSONObject = deleteGroupUsingGET200ApplicationJSONObject;
        return this;
    }
    
    /**
     * generic api error (code 1)
     */
    
    public DeleteGroupUsingGET400ApplicationJSON deleteGroupUsingGET400ApplicationJSONObject;

    public DeleteGroupUsingGETResponse withDeleteGroupUsingGET400ApplicationJSONObject(DeleteGroupUsingGET400ApplicationJSON deleteGroupUsingGET400ApplicationJSONObject) {
        this.deleteGroupUsingGET400ApplicationJSONObject = deleteGroupUsingGET400ApplicationJSONObject;
        return this;
    }
    
    /**
     * no or wrong API key (code 4)
     */
    
    public DeleteGroupUsingGET401ApplicationJSON deleteGroupUsingGET401ApplicationJSONObject;

    public DeleteGroupUsingGETResponse withDeleteGroupUsingGET401ApplicationJSONObject(DeleteGroupUsingGET401ApplicationJSON deleteGroupUsingGET401ApplicationJSONObject) {
        this.deleteGroupUsingGET401ApplicationJSONObject = deleteGroupUsingGET401ApplicationJSONObject;
        return this;
    }
    
    /**
     * internal api error (code 2)
     */
    
    public DeleteGroupUsingGET500ApplicationJSON deleteGroupUsingGET500ApplicationJSONObject;

    public DeleteGroupUsingGETResponse withDeleteGroupUsingGET500ApplicationJSONObject(DeleteGroupUsingGET500ApplicationJSON deleteGroupUsingGET500ApplicationJSONObject) {
        this.deleteGroupUsingGET500ApplicationJSONObject = deleteGroupUsingGET500ApplicationJSONObject;
        return this;
    }
    
    public DeleteGroupUsingGETResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
