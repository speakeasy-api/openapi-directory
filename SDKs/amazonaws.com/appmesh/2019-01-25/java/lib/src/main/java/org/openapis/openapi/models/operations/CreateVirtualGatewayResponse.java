/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateVirtualGatewayResponse {
    /**
     * BadRequestException
     */
    
    public Object badRequestException;

    public CreateVirtualGatewayResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    
    /**
     * ConflictException
     */
    
    public Object conflictException;

    public CreateVirtualGatewayResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    
    
    public String contentType;

    public CreateVirtualGatewayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.CreateVirtualGatewayOutput createVirtualGatewayOutput;

    public CreateVirtualGatewayResponse withCreateVirtualGatewayOutput(org.openapis.openapi.models.shared.CreateVirtualGatewayOutput createVirtualGatewayOutput) {
        this.createVirtualGatewayOutput = createVirtualGatewayOutput;
        return this;
    }
    
    /**
     * ForbiddenException
     */
    
    public Object forbiddenException;

    public CreateVirtualGatewayResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    
    /**
     * InternalServerErrorException
     */
    
    public Object internalServerErrorException;

    public CreateVirtualGatewayResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    
    /**
     * LimitExceededException
     */
    
    public Object limitExceededException;

    public CreateVirtualGatewayResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    
    /**
     * NotFoundException
     */
    
    public Object notFoundException;

    public CreateVirtualGatewayResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateVirtualGatewayResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateVirtualGatewayResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ServiceUnavailableException
     */
    
    public Object serviceUnavailableException;

    public CreateVirtualGatewayResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    
    /**
     * TooManyRequestsException
     */
    
    public Object tooManyRequestsException;

    public CreateVirtualGatewayResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    
    public CreateVirtualGatewayResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
