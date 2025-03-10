/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetVirtualMachineResponse {
    
    public String contentType;

    public GetVirtualMachineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetVirtualMachineOutput getVirtualMachineOutput;

    public GetVirtualMachineResponse withGetVirtualMachineOutput(org.openapis.openapi.models.shared.GetVirtualMachineOutput getVirtualMachineOutput) {
        this.getVirtualMachineOutput = getVirtualMachineOutput;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public GetVirtualMachineResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    /**
     * ResourceNotFoundException
     */
    
    public Object resourceNotFoundException;

    public GetVirtualMachineResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetVirtualMachineResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetVirtualMachineResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ThrottlingException
     */
    
    public Object throttlingException;

    public GetVirtualMachineResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public GetVirtualMachineResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public GetVirtualMachineResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
