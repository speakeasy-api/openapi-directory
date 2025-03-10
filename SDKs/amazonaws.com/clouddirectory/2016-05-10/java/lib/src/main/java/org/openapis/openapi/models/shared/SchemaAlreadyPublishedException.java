/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SchemaAlreadyPublishedException - Indicates that a schema is already published.
 */
public class SchemaAlreadyPublishedException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;

    public SchemaAlreadyPublishedException withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public SchemaAlreadyPublishedException(){}
}
