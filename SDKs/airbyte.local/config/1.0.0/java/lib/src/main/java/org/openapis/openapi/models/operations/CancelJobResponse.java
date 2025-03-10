/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CancelJobResponse {
    
    public String contentType;

    public CancelJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Input failed validation
     */
    
    public org.openapis.openapi.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;

    public CancelJobResponse withInvalidInputExceptionInfo(org.openapis.openapi.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    
    /**
     * Successful operation
     */
    
    public org.openapis.openapi.models.shared.JobInfoRead jobInfoRead;

    public CancelJobResponse withJobInfoRead(org.openapis.openapi.models.shared.JobInfoRead jobInfoRead) {
        this.jobInfoRead = jobInfoRead;
        return this;
    }
    
    /**
     * Object with given id was not found.
     */
    
    public org.openapis.openapi.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;

    public CancelJobResponse withNotFoundKnownExceptionInfo(org.openapis.openapi.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    
    
    public Integer statusCode;

    public CancelJobResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CancelJobResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public CancelJobResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
