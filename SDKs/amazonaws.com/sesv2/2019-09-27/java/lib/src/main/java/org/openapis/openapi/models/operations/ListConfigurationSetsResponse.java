/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListConfigurationSetsResponse {
    /**
     * BadRequestException
     */
    
    public Object badRequestException;

    public ListConfigurationSetsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    
    
    public String contentType;

    public ListConfigurationSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.ListConfigurationSetsResponse listConfigurationSetsResponse;

    public ListConfigurationSetsResponse withListConfigurationSetsResponse(org.openapis.openapi.models.shared.ListConfigurationSetsResponse listConfigurationSetsResponse) {
        this.listConfigurationSetsResponse = listConfigurationSetsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ListConfigurationSetsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListConfigurationSetsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * TooManyRequestsException
     */
    
    public Object tooManyRequestsException;

    public ListConfigurationSetsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    
    public ListConfigurationSetsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
