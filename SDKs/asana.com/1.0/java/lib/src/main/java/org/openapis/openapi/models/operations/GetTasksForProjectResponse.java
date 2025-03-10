/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetTasksForProjectResponse {
    
    public String contentType;

    public GetTasksForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     */
    
    public org.openapis.openapi.models.shared.ErrorResponse errorResponse;

    public GetTasksForProjectResponse withErrorResponse(org.openapis.openapi.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public GetTasksForProjectResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetTasksForProjectResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Successfully retrieved the requested project's tasks.
     */
    
    public GetTasksForProject200ApplicationJSON getTasksForProject200ApplicationJSONObject;

    public GetTasksForProjectResponse withGetTasksForProject200ApplicationJSONObject(GetTasksForProject200ApplicationJSON getTasksForProject200ApplicationJSONObject) {
        this.getTasksForProject200ApplicationJSONObject = getTasksForProject200ApplicationJSONObject;
        return this;
    }
    
    public GetTasksForProjectResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
