/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Bhcer401ApplicationJSON - Unauthorized access
 */
public class Bhcer401ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Bhcer401ApplicationJSONErrorEnum error;

    public Bhcer401ApplicationJSON withError(Bhcer401ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Bhcer401ApplicationJSONErrorDescriptionEnum errorDescription;

    public Bhcer401ApplicationJSON withErrorDescription(Bhcer401ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Bhcer401ApplicationJSON(){}
}
