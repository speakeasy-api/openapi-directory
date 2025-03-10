/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StopInstanceResult - Success
 */
public class StopInstanceResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public Operation[] operations;

    public StopInstanceResult withOperations(Operation[] operations) {
        this.operations = operations;
        return this;
    }
    
    public StopInstanceResult(){}
}
