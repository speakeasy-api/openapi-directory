/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class EnableDomainAutoRenewResponse {
    
    public String contentType;

    public EnableDomainAutoRenewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public java.util.Map<String, Object> enableDomainAutoRenewResponse;

    public EnableDomainAutoRenewResponse withEnableDomainAutoRenewResponse(java.util.Map<String, Object> enableDomainAutoRenewResponse) {
        this.enableDomainAutoRenewResponse = enableDomainAutoRenewResponse;
        return this;
    }
    
    /**
     * InvalidInput
     */
    
    public Object invalidInput;

    public EnableDomainAutoRenewResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    
    
    public Integer statusCode;

    public EnableDomainAutoRenewResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public EnableDomainAutoRenewResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * TLDRulesViolation
     */
    
    public Object tldRulesViolation;

    public EnableDomainAutoRenewResponse withTLDRulesViolation(Object tldRulesViolation) {
        this.tldRulesViolation = tldRulesViolation;
        return this;
    }
    
    /**
     * UnsupportedTLD
     */
    
    public Object unsupportedTLD;

    public EnableDomainAutoRenewResponse withUnsupportedTLD(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
    
    public EnableDomainAutoRenewResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
