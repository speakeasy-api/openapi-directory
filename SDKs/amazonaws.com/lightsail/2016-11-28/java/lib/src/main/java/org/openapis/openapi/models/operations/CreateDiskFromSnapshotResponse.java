/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateDiskFromSnapshotResponse {
    /**
     * AccessDeniedException
     */
    
    public Object accessDeniedException;

    public CreateDiskFromSnapshotResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    
    /**
     * AccountSetupInProgressException
     */
    
    public Object accountSetupInProgressException;

    public CreateDiskFromSnapshotResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    
    
    public String contentType;

    public CreateDiskFromSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.CreateDiskFromSnapshotResult createDiskFromSnapshotResult;

    public CreateDiskFromSnapshotResponse withCreateDiskFromSnapshotResult(org.openapis.openapi.models.shared.CreateDiskFromSnapshotResult createDiskFromSnapshotResult) {
        this.createDiskFromSnapshotResult = createDiskFromSnapshotResult;
        return this;
    }
    
    /**
     * InvalidInputException
     */
    
    public Object invalidInputException;

    public CreateDiskFromSnapshotResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    
    /**
     * NotFoundException
     */
    
    public Object notFoundException;

    public CreateDiskFromSnapshotResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    
    /**
     * OperationFailureException
     */
    
    public Object operationFailureException;

    public CreateDiskFromSnapshotResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    
    /**
     * ServiceException
     */
    
    public Object serviceException;

    public CreateDiskFromSnapshotResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateDiskFromSnapshotResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateDiskFromSnapshotResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * UnauthenticatedException
     */
    
    public Object unauthenticatedException;

    public CreateDiskFromSnapshotResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
    
    public CreateDiskFromSnapshotResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
