/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetDeviceResponse {
    
    public String contentType;

    public GetDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * ForbiddenException
     */
    
    public Object forbiddenException;

    public GetDeviceResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetDeviceResponse getDeviceResponse;

    public GetDeviceResponse withGetDeviceResponse(org.openapis.openapi.models.shared.GetDeviceResponse getDeviceResponse) {
        this.getDeviceResponse = getDeviceResponse;
        return this;
    }
    
    /**
     * InternalErrorException
     */
    
    public Object internalErrorException;

    public GetDeviceResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    
    /**
     * InvalidParameterException
     */
    
    public Object invalidParameterException;

    public GetDeviceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    
    /**
     * InvalidUserPoolConfigurationException
     */
    
    public Object invalidUserPoolConfigurationException;

    public GetDeviceResponse withInvalidUserPoolConfigurationException(Object invalidUserPoolConfigurationException) {
        this.invalidUserPoolConfigurationException = invalidUserPoolConfigurationException;
        return this;
    }
    
    /**
     * NotAuthorizedException
     */
    
    public Object notAuthorizedException;

    public GetDeviceResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    
    /**
     * PasswordResetRequiredException
     */
    
    public Object passwordResetRequiredException;

    public GetDeviceResponse withPasswordResetRequiredException(Object passwordResetRequiredException) {
        this.passwordResetRequiredException = passwordResetRequiredException;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public GetDeviceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetDeviceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetDeviceResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * TooManyRequestsException
     */
    
    public Object tooManyRequestsException;

    public GetDeviceResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    
    /**
     * UserNotConfirmedException
     */
    
    public Object userNotConfirmedException;

    public GetDeviceResponse withUserNotConfirmedException(Object userNotConfirmedException) {
        this.userNotConfirmedException = userNotConfirmedException;
        return this;
    }
    
    /**
     * UserNotFoundException
     */
    
    public Object userNotFoundException;

    public GetDeviceResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
    
    public GetDeviceResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
