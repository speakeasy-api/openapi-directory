/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetEventStreamResponse {
    /**
     * BadRequestException
     */
    
    public Object badRequestException;

    public GetEventStreamResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    
    
    public String contentType;

    public GetEventStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * ForbiddenException
     */
    
    public Object forbiddenException;

    public GetEventStreamResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetEventStreamResponse getEventStreamResponse;

    public GetEventStreamResponse withGetEventStreamResponse(org.openapis.openapi.models.shared.GetEventStreamResponse getEventStreamResponse) {
        this.getEventStreamResponse = getEventStreamResponse;
        return this;
    }
    
    /**
     * InternalServerErrorException
     */
    
    public Object internalServerErrorException;

    public GetEventStreamResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    
    /**
     * MethodNotAllowedException
     */
    
    public Object methodNotAllowedException;

    public GetEventStreamResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    
    /**
     * NotFoundException
     */
    
    public Object notFoundException;

    public GetEventStreamResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    
    /**
     * PayloadTooLargeException
     */
    
    public Object payloadTooLargeException;

    public GetEventStreamResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetEventStreamResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetEventStreamResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * TooManyRequestsException
     */
    
    public Object tooManyRequestsException;

    public GetEventStreamResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    
    public GetEventStreamResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
