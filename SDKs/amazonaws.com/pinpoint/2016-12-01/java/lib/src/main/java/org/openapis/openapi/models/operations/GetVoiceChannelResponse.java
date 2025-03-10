/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetVoiceChannelResponse {
    /**
     * BadRequestException
     */
    
    public Object badRequestException;

    public GetVoiceChannelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    
    
    public String contentType;

    public GetVoiceChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * ForbiddenException
     */
    
    public Object forbiddenException;

    public GetVoiceChannelResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetVoiceChannelResponse getVoiceChannelResponse;

    public GetVoiceChannelResponse withGetVoiceChannelResponse(org.openapis.openapi.models.shared.GetVoiceChannelResponse getVoiceChannelResponse) {
        this.getVoiceChannelResponse = getVoiceChannelResponse;
        return this;
    }
    
    /**
     * InternalServerErrorException
     */
    
    public Object internalServerErrorException;

    public GetVoiceChannelResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    
    /**
     * MethodNotAllowedException
     */
    
    public Object methodNotAllowedException;

    public GetVoiceChannelResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    
    /**
     * NotFoundException
     */
    
    public Object notFoundException;

    public GetVoiceChannelResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    
    /**
     * PayloadTooLargeException
     */
    
    public Object payloadTooLargeException;

    public GetVoiceChannelResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetVoiceChannelResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetVoiceChannelResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * TooManyRequestsException
     */
    
    public Object tooManyRequestsException;

    public GetVoiceChannelResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    
    public GetVoiceChannelResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
