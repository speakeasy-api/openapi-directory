/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class UpdateFleetPortSettingsResponse {
    /**
     * ConflictException
     */
    
    public Object conflictException;

    public UpdateFleetPortSettingsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    
    
    public String contentType;

    public UpdateFleetPortSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServiceException
     */
    
    public Object internalServiceException;

    public UpdateFleetPortSettingsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    
    /**
     * InvalidFleetStatusException
     */
    
    public Object invalidFleetStatusException;

    public UpdateFleetPortSettingsResponse withInvalidFleetStatusException(Object invalidFleetStatusException) {
        this.invalidFleetStatusException = invalidFleetStatusException;
        return this;
    }
    
    /**
     * InvalidRequestException
     */
    
    public Object invalidRequestException;

    public UpdateFleetPortSettingsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    
    /**
     * LimitExceededException
     */
    
    public Object limitExceededException;

    public UpdateFleetPortSettingsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    
    /**
     * NotFoundException
     */
    
    public Object notFoundException;

    public UpdateFleetPortSettingsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public UpdateFleetPortSettingsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public UpdateFleetPortSettingsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * UnauthorizedException
     */
    
    public Object unauthorizedException;

    public UpdateFleetPortSettingsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.UpdateFleetPortSettingsOutput updateFleetPortSettingsOutput;

    public UpdateFleetPortSettingsResponse withUpdateFleetPortSettingsOutput(org.openapis.openapi.models.shared.UpdateFleetPortSettingsOutput updateFleetPortSettingsOutput) {
        this.updateFleetPortSettingsOutput = updateFleetPortSettingsOutput;
        return this;
    }
    
    public UpdateFleetPortSettingsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
