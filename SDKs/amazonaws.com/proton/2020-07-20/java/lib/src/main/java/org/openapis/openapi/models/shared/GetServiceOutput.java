/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServiceOutput - Success
 */
public class GetServiceOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public Service service;

    public GetServiceOutput withService(Service service) {
        this.service = service;
        return this;
    }
    
    public GetServiceOutput(){}
}
