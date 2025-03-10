/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Dccer401ApplicationJSON - Unauthorized access
 */
public class Dccer401ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Dccer401ApplicationJSONErrorEnum error;

    public Dccer401ApplicationJSON withError(Dccer401ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Dccer401ApplicationJSONErrorDescriptionEnum errorDescription;

    public Dccer401ApplicationJSON withErrorDescription(Dccer401ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Dccer401ApplicationJSON(){}
}
