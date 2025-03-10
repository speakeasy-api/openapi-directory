/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ChecksGetSuiteResponse {
    
    public String contentType;

    public ChecksGetSuiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ChecksGetSuiteResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ChecksGetSuiteResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.CheckSuite checkSuite;

    public ChecksGetSuiteResponse withCheckSuite(org.openapis.openapi.models.shared.CheckSuite checkSuite) {
        this.checkSuite = checkSuite;
        return this;
    }
    
    public ChecksGetSuiteResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
