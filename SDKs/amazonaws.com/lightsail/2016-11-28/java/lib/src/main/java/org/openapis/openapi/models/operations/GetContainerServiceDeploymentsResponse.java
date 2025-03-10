/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetContainerServiceDeploymentsResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public GetContainerServiceDeploymentsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    
    public String contentType;

    public GetContainerServiceDeploymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetContainerServiceDeploymentsResult getContainerServiceDeploymentsResult;

    public GetContainerServiceDeploymentsResponse withGetContainerServiceDeploymentsResult(org.openapis.openapi.models.shared.GetContainerServiceDeploymentsResult getContainerServiceDeploymentsResult) {
        this.getContainerServiceDeploymentsResult = getContainerServiceDeploymentsResult;
        return this;
    }
    
    /**
     * InvalidInputException
     */
    
    public Object invalidInputException;

    public GetContainerServiceDeploymentsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    
    /**
     * NotFoundException
     */
    
    public Object notFoundException;

    public GetContainerServiceDeploymentsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    
    /**
     * ServiceException
     */
    
    public Object serviceException;

    public GetContainerServiceDeploymentsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetContainerServiceDeploymentsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetContainerServiceDeploymentsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * UnauthenticatedException
     */
    
    public Object unauthenticatedException;

    public GetContainerServiceDeploymentsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
    
    public GetContainerServiceDeploymentsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
