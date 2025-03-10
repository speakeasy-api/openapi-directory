/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateLeadResponse - Lead created
 */
public class CreateLeadResponse {
    @JsonProperty("data")
    public UnifiedId data;

    public CreateLeadResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    
    /**
     * Operation performed
     */
    @JsonProperty("operation")
    public String operation;

    public CreateLeadResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    
    /**
     * Unified API resource name
     */
    @JsonProperty("resource")
    public String resource;

    public CreateLeadResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    
    /**
     * Apideck ID of service provider
     */
    @JsonProperty("service")
    public String service;

    public CreateLeadResponse withService(String service) {
        this.service = service;
        return this;
    }
    
    /**
     * HTTP Response Status
     */
    @JsonProperty("status")
    public String status;

    public CreateLeadResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    
    /**
     * HTTP Response Status Code
     */
    @JsonProperty("status_code")
    public Long statusCode;

    public CreateLeadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    public CreateLeadResponse(@JsonProperty("data") UnifiedId data, @JsonProperty("operation") String operation, @JsonProperty("resource") String resource, @JsonProperty("service") String service, @JsonProperty("status") String status, @JsonProperty("status_code") Long statusCode) {
        this.data = data;
        this.operation = operation;
        this.resource = resource;
        this.service = service;
        this.status = status;
        this.statusCode = statusCode;
  }
}
