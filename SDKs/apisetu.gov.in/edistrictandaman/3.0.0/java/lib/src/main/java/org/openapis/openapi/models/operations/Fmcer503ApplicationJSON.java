/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Fmcer503ApplicationJSON - Service unavailable
 */
public class Fmcer503ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Fmcer503ApplicationJSONErrorEnum error;

    public Fmcer503ApplicationJSON withError(Fmcer503ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Fmcer503ApplicationJSONErrorDescriptionEnum errorDescription;

    public Fmcer503ApplicationJSON withErrorDescription(Fmcer503ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Fmcer503ApplicationJSON(){}
}
