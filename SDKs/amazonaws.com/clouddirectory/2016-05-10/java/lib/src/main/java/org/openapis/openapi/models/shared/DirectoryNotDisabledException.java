/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DirectoryNotDisabledException - An operation can only operate on a disabled directory.
 */
public class DirectoryNotDisabledException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;

    public DirectoryNotDisabledException withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public DirectoryNotDisabledException(){}
}
