/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateSimulationApplicationRequestBodyEnvironment - The object that contains the Docker image URI for either your robot or simulation applications.
 */
public class CreateSimulationApplicationRequestBodyEnvironment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;

    public CreateSimulationApplicationRequestBodyEnvironment withUri(String uri) {
        this.uri = uri;
        return this;
    }
    
    public CreateSimulationApplicationRequestBodyEnvironment(){}
}
