/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class UpdateStackResponse {
    /**
     * ConcurrentModificationException
     */
    
    public Object concurrentModificationException;

    public UpdateStackResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    
    
    public String contentType;

    public UpdateStackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * IncompatibleImageException
     */
    
    public Object incompatibleImageException;

    public UpdateStackResponse withIncompatibleImageException(Object incompatibleImageException) {
        this.incompatibleImageException = incompatibleImageException;
        return this;
    }
    
    /**
     * InvalidAccountStatusException
     */
    
    public Object invalidAccountStatusException;

    public UpdateStackResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    
    /**
     * InvalidParameterCombinationException
     */
    
    public Object invalidParameterCombinationException;

    public UpdateStackResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    
    /**
     * InvalidRoleException
     */
    
    public Object invalidRoleException;

    public UpdateStackResponse withInvalidRoleException(Object invalidRoleException) {
        this.invalidRoleException = invalidRoleException;
        return this;
    }
    
    /**
     * LimitExceededException
     */
    
    public Object limitExceededException;

    public UpdateStackResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    
    /**
     * OperationNotPermittedException
     */
    
    public Object operationNotPermittedException;

    public UpdateStackResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    
    
    public Integer statusCode;

    public UpdateStackResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public UpdateStackResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ResourceInUseException
     */
    
    public Object resourceInUseException;

    public UpdateStackResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public UpdateStackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.UpdateStackResult updateStackResult;

    public UpdateStackResponse withUpdateStackResult(org.openapis.openapi.models.shared.UpdateStackResult updateStackResult) {
        this.updateStackResult = updateStackResult;
        return this;
    }
    
    public UpdateStackResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
