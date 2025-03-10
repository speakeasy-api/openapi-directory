/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Error400 - A set of errors
 */
public class Error400 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error400Error[] errors;

    public Error400 withErrors(Error400Error[] errors) {
        this.errors = errors;
        return this;
    }
    
    public Error400(){}
}
