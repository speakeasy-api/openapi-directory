/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateArtifactRawResponse {
    /**
     * Artifact was successfully created.
     */
    
    public org.openapis.openapi.models.shared.ArtifactMetaData artifactMetaData;

    public CreateArtifactRawResponse withArtifactMetaData(org.openapis.openapi.models.shared.ArtifactMetaData artifactMetaData) {
        this.artifactMetaData = artifactMetaData;
        return this;
    }
    
    
    public String contentType;

    public CreateArtifactRawResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Common response for all operations that can return a `400` error.
     */
    
    public org.openapis.openapi.models.shared.Error error;

    public CreateArtifactRawResponse withError(org.openapis.openapi.models.shared.Error error) {
        this.error = error;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateArtifactRawResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateArtifactRawResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Common response used when an input conflicts with existing data.
     */
    
    public org.openapis.openapi.models.shared.RuleViolationError ruleViolationError;

    public CreateArtifactRawResponse withRuleViolationError(org.openapis.openapi.models.shared.RuleViolationError ruleViolationError) {
        this.ruleViolationError = ruleViolationError;
        return this;
    }
    
    public CreateArtifactRawResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
