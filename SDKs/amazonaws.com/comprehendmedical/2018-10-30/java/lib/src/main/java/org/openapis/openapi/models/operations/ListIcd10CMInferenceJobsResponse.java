/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListIcd10CMInferenceJobsResponse {
    
    public String contentType;

    public ListIcd10CMInferenceJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InternalServerException
     */
    
    public Object internalServerException;

    public ListIcd10CMInferenceJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    
    /**
     * InvalidRequestException
     */
    
    public Object invalidRequestException;

    public ListIcd10CMInferenceJobsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.ListIcd10CMInferenceJobsResponse listIcd10CMInferenceJobsResponse;

    public ListIcd10CMInferenceJobsResponse withListIcd10CMInferenceJobsResponse(org.openapis.openapi.models.shared.ListIcd10CMInferenceJobsResponse listIcd10CMInferenceJobsResponse) {
        this.listIcd10CMInferenceJobsResponse = listIcd10CMInferenceJobsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ListIcd10CMInferenceJobsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListIcd10CMInferenceJobsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * TooManyRequestsException
     */
    
    public Object tooManyRequestsException;

    public ListIcd10CMInferenceJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public ListIcd10CMInferenceJobsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public ListIcd10CMInferenceJobsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
