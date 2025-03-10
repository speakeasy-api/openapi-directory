/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetUserDefinedFunctionResponse {
    
    public String contentType;

    public GetUserDefinedFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * EntityNotFoundException
     */
    
    public Object entityNotFoundException;

    public GetUserDefinedFunctionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetUserDefinedFunctionResponse getUserDefinedFunctionResponse;

    public GetUserDefinedFunctionResponse withGetUserDefinedFunctionResponse(org.openapis.openapi.models.shared.GetUserDefinedFunctionResponse getUserDefinedFunctionResponse) {
        this.getUserDefinedFunctionResponse = getUserDefinedFunctionResponse;
        return this;
    }
    
    /**
     * GlueEncryptionException
     */
    
    public Object glueEncryptionException;

    public GetUserDefinedFunctionResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    
    /**
     * InternalServiceException
     */
    
    public Object internalServiceException;

    public GetUserDefinedFunctionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    
    /**
     * InvalidInputException
     */
    
    public Object invalidInputException;

    public GetUserDefinedFunctionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    
    /**
     * OperationTimeoutException
     */
    
    public Object operationTimeoutException;

    public GetUserDefinedFunctionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetUserDefinedFunctionResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetUserDefinedFunctionResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetUserDefinedFunctionResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
