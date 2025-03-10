/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class RegistryDeleteApiSpecRevisionResponse {
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.ApiSpecOutput apiSpec;

    public RegistryDeleteApiSpecRevisionResponse withApiSpec(org.openapis.openapi.models.shared.ApiSpecOutput apiSpec) {
        this.apiSpec = apiSpec;
        return this;
    }
    
    
    public String contentType;

    public RegistryDeleteApiSpecRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Default error response
     */
    
    public org.openapis.openapi.models.shared.Status status;

    public RegistryDeleteApiSpecRevisionResponse withStatus(org.openapis.openapi.models.shared.Status status) {
        this.status = status;
        return this;
    }
    
    
    public Integer statusCode;

    public RegistryDeleteApiSpecRevisionResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public RegistryDeleteApiSpecRevisionResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public RegistryDeleteApiSpecRevisionResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
