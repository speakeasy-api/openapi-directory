/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetRegistryScanningConfigurationResponse {
    
    public String contentType;

    public GetRegistryScanningConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.GetRegistryScanningConfigurationResponse getRegistryScanningConfigurationResponse;

    public GetRegistryScanningConfigurationResponse withGetRegistryScanningConfigurationResponse(org.openapis.openapi.models.shared.GetRegistryScanningConfigurationResponse getRegistryScanningConfigurationResponse) {
        this.getRegistryScanningConfigurationResponse = getRegistryScanningConfigurationResponse;
        return this;
    }
    
    /**
     * InvalidParameterException
     */
    
    public Object invalidParameterException;

    public GetRegistryScanningConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    
    /**
     * ServerException
     */
    
    public Object serverException;

    public GetRegistryScanningConfigurationResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    
    
    public Integer statusCode;

    public GetRegistryScanningConfigurationResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetRegistryScanningConfigurationResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * ValidationException
     */
    
    public Object validationException;

    public GetRegistryScanningConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
    
    public GetRegistryScanningConfigurationResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
