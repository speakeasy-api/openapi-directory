/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class UpdateApnsSandboxChannelResponse {
    /**
     * BadRequestException
     */
    
    public Object badRequestException;

    public UpdateApnsSandboxChannelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    
    
    public String contentType;

    public UpdateApnsSandboxChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * ForbiddenException
     */
    
    public Object forbiddenException;

    public UpdateApnsSandboxChannelResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    
    /**
     * InternalServerErrorException
     */
    
    public Object internalServerErrorException;

    public UpdateApnsSandboxChannelResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    
    /**
     * MethodNotAllowedException
     */
    
    public Object methodNotAllowedException;

    public UpdateApnsSandboxChannelResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    
    /**
     * NotFoundException
     */
    
    public Object notFoundException;

    public UpdateApnsSandboxChannelResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    
    /**
     * PayloadTooLargeException
     */
    
    public Object payloadTooLargeException;

    public UpdateApnsSandboxChannelResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    
    
    public Integer statusCode;

    public UpdateApnsSandboxChannelResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public UpdateApnsSandboxChannelResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * TooManyRequestsException
     */
    
    public Object tooManyRequestsException;

    public UpdateApnsSandboxChannelResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.UpdateApnsSandboxChannelResponse updateApnsSandboxChannelResponse;

    public UpdateApnsSandboxChannelResponse withUpdateApnsSandboxChannelResponse(org.openapis.openapi.models.shared.UpdateApnsSandboxChannelResponse updateApnsSandboxChannelResponse) {
        this.updateApnsSandboxChannelResponse = updateApnsSandboxChannelResponse;
        return this;
    }
    
    public UpdateApnsSandboxChannelResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
