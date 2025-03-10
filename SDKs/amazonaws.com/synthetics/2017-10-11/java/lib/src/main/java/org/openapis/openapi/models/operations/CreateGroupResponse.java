/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateGroupResponse {
    /**
     * ConflictException
     */
    
    public Object conflictException;

    public CreateGroupResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    
    
    public String contentType;

    public CreateGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.CreateGroupResponse createGroupResponse;

    public CreateGroupResponse withCreateGroupResponse(org.openapis.openapi.models.shared.CreateGroupResponse createGroupResponse) {
        this.createGroupResponse = createGroupResponse;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public CreateGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateGroupResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateGroupResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ServiceQuotaExceededException
     */
    
    public Object serviceQuotaExceededException;

    public CreateGroupResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public CreateGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public CreateGroupResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
