/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Incer401ApplicationJSON - Unauthorized access
 */
public class Incer401ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Incer401ApplicationJSONErrorEnum error;

    public Incer401ApplicationJSON withError(Incer401ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Incer401ApplicationJSONErrorDescriptionEnum errorDescription;

    public Incer401ApplicationJSON withErrorDescription(Incer401ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Incer401ApplicationJSON(){}
}
