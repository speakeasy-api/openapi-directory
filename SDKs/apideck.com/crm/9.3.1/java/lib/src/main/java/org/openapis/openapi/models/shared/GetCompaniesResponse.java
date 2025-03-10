/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetCompaniesResponse - Companies
 */
public class GetCompaniesResponse {
    @JsonProperty("data")
    public Company[] data;

    public GetCompaniesResponse withData(Company[] data) {
        this.data = data;
        return this;
    }
    
    /**
     * Links to navigate to previous or next pages through the API
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Links links;

    public GetCompaniesResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    
    /**
     * Response metadata
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;

    public GetCompaniesResponse withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    
    /**
     * Operation performed
     */
    @JsonProperty("operation")
    public String operation;

    public GetCompaniesResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    
    /**
     * Unified API resource name
     */
    @JsonProperty("resource")
    public String resource;

    public GetCompaniesResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    
    /**
     * Apideck ID of service provider
     */
    @JsonProperty("service")
    public String service;

    public GetCompaniesResponse withService(String service) {
        this.service = service;
        return this;
    }
    
    /**
     * HTTP Response Status
     */
    @JsonProperty("status")
    public String status;

    public GetCompaniesResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    
    /**
     * HTTP Response Status Code
     */
    @JsonProperty("status_code")
    public Long statusCode;

    public GetCompaniesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    public GetCompaniesResponse(@JsonProperty("data") Company[] data, @JsonProperty("operation") String operation, @JsonProperty("resource") String resource, @JsonProperty("service") String service, @JsonProperty("status") String status, @JsonProperty("status_code") Long statusCode) {
        this.data = data;
        this.operation = operation;
        this.resource = resource;
        this.service = service;
        this.status = status;
        this.statusCode = statusCode;
  }
}
