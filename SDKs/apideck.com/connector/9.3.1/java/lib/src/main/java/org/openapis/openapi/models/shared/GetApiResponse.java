/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetApiResponse - Apis
 */
public class GetApiResponse {
    @JsonProperty("data")
    public Api data;

    public GetApiResponse withData(Api data) {
        this.data = data;
        return this;
    }
    
    /**
     * Links to navigate to previous or next pages through the API
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Links links;

    public GetApiResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    
    /**
     * Response metadata
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;

    public GetApiResponse withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    
    /**
     * HTTP Response Status
     */
    @JsonProperty("status")
    public String status;

    public GetApiResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    
    /**
     * HTTP Response Status Code
     */
    @JsonProperty("status_code")
    public Long statusCode;

    public GetApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    public GetApiResponse(@JsonProperty("data") Api data, @JsonProperty("status") String status, @JsonProperty("status_code") Long statusCode) {
        this.data = data;
        this.status = status;
        this.statusCode = statusCode;
  }
}
