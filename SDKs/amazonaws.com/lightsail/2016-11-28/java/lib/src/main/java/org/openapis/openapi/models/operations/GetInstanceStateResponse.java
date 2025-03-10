/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetInstanceStateResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public GetInstanceStateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    /**
     * AccountSetupInProgressException
     */
    
    public Object accountSetupInProgressException;

    public GetInstanceStateResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    
    
    public String contentType;

    public GetInstanceStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetInstanceStateResult getInstanceStateResult;

    public GetInstanceStateResponse withGetInstanceStateResult(org.openapis.openapi.models.shared.GetInstanceStateResult getInstanceStateResult) {
        this.getInstanceStateResult = getInstanceStateResult;
        return this;
    }
    
    /**
     * InvalidInputException
     */
    
    public Object invalidInputException;

    public GetInstanceStateResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    
    /**
     * NotFoundException
     */
    
    public Object notFoundException;

    public GetInstanceStateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    
    /**
     * OperationFailureException
     */
    
    public Object operationFailureException;

    public GetInstanceStateResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    
    /**
     * ServiceException
     */
    
    public Object serviceException;

    public GetInstanceStateResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetInstanceStateResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetInstanceStateResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * UnauthenticatedException
     */
    
    public Object unauthenticatedException;

    public GetInstanceStateResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
    
    public GetInstanceStateResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
