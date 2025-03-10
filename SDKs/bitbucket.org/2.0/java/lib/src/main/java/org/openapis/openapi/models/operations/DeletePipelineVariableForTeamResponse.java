/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DeletePipelineVariableForTeamResponse {
    
    public String contentType;

    public DeletePipelineVariableForTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public DeletePipelineVariableForTeamResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DeletePipelineVariableForTeamResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * The account or the variable with the provided UUID does not exist.
     */
    
    public java.util.Map<String, Object> error;

    public DeletePipelineVariableForTeamResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    
    public DeletePipelineVariableForTeamResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
