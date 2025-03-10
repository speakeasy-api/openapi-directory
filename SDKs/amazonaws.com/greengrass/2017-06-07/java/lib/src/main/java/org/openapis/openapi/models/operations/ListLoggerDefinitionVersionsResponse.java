/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListLoggerDefinitionVersionsResponse {
    /**
     * BadRequestException
     */
    
    public Object badRequestException;

    public ListLoggerDefinitionVersionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    
    
    public String contentType;

    public ListLoggerDefinitionVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.ListLoggerDefinitionVersionsResponse listLoggerDefinitionVersionsResponse;

    public ListLoggerDefinitionVersionsResponse withListLoggerDefinitionVersionsResponse(org.openapis.openapi.models.shared.ListLoggerDefinitionVersionsResponse listLoggerDefinitionVersionsResponse) {
        this.listLoggerDefinitionVersionsResponse = listLoggerDefinitionVersionsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ListLoggerDefinitionVersionsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListLoggerDefinitionVersionsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ListLoggerDefinitionVersionsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
