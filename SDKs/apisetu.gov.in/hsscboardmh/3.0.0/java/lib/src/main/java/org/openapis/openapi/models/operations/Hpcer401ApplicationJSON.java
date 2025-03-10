/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Hpcer401ApplicationJSON - Unauthorized access
 */
public class Hpcer401ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Hpcer401ApplicationJSONErrorEnum error;

    public Hpcer401ApplicationJSON withError(Hpcer401ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Hpcer401ApplicationJSONErrorDescriptionEnum errorDescription;

    public Hpcer401ApplicationJSON withErrorDescription(Hpcer401ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Hpcer401ApplicationJSON(){}
}
