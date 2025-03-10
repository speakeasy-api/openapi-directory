/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateFlowDefinitionResponse {
    
    public String contentType;

    public CreateFlowDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.CreateFlowDefinitionResponse createFlowDefinitionResponse;

    public CreateFlowDefinitionResponse withCreateFlowDefinitionResponse(org.openapis.openapi.models.shared.CreateFlowDefinitionResponse createFlowDefinitionResponse) {
        this.createFlowDefinitionResponse = createFlowDefinitionResponse;
        return this;
    }
    
    /**
     * ResourceInUse
     */
    
    public Object resourceInUse;

    public CreateFlowDefinitionResponse withResourceInUse(Object resourceInUse) {
        this.resourceInUse = resourceInUse;
        return this;
    }
    
    /**
     * ResourceLimitExceeded
     */
    
    public Object resourceLimitExceeded;

    public CreateFlowDefinitionResponse withResourceLimitExceeded(Object resourceLimitExceeded) {
        this.resourceLimitExceeded = resourceLimitExceeded;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateFlowDefinitionResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateFlowDefinitionResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public CreateFlowDefinitionResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
