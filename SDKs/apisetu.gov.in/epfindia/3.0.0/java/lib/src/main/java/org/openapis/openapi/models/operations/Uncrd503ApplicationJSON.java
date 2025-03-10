/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Uncrd503ApplicationJSON - Service unavailable
 */
public class Uncrd503ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Uncrd503ApplicationJSONErrorEnum error;

    public Uncrd503ApplicationJSON withError(Uncrd503ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Uncrd503ApplicationJSONErrorDescriptionEnum errorDescription;

    public Uncrd503ApplicationJSON withErrorDescription(Uncrd503ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Uncrd503ApplicationJSON(){}
}
