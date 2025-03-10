/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetMessagesResponse - Messages
 */
public class GetMessagesResponse {
    @JsonProperty("data")
    public Message[] data;
    public GetMessagesResponse withData(Message[] data) {
        this.data = data;
        return this;
    }
    
    /**
     * Links to navigate to previous or next pages through the API
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Links links;
    public GetMessagesResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    
    /**
     * Response metadata
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;
    public GetMessagesResponse withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    
    /**
     * Operation performed
     */
    @JsonProperty("operation")
    public String operation;
    public GetMessagesResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    
    /**
     * Unified API resource name
     */
    @JsonProperty("resource")
    public String resource;
    public GetMessagesResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    
    /**
     * Apideck ID of service provider
     */
    @JsonProperty("service")
    public String service;
    public GetMessagesResponse withService(String service) {
        this.service = service;
        return this;
    }
    
    /**
     * HTTP Response Status
     */
    @JsonProperty("status")
    public String status;
    public GetMessagesResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    
    /**
     * HTTP Response Status Code
     */
    @JsonProperty("status_code")
    public Long statusCode;
    public GetMessagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
}
