/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteItemResponse - Items
 */
public class DeleteItemResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public DeleteItemResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    
    /**
     * Operation performed
     */
    @JsonProperty("operation")
    public String operation;
    public DeleteItemResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    
    /**
     * Unified API resource name
     */
    @JsonProperty("resource")
    public String resource;
    public DeleteItemResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    
    /**
     * Apideck ID of service provider
     */
    @JsonProperty("service")
    public String service;
    public DeleteItemResponse withService(String service) {
        this.service = service;
        return this;
    }
    
    /**
     * HTTP Response Status
     */
    @JsonProperty("status")
    public String status;
    public DeleteItemResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    
    /**
     * HTTP Response Status Code
     */
    @JsonProperty("status_code")
    public Long statusCode;
    public DeleteItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
}
