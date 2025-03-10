/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Drvlc503ApplicationJSON - Service unavailable
 */
public class Drvlc503ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Drvlc503ApplicationJSONErrorEnum error;

    public Drvlc503ApplicationJSON withError(Drvlc503ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Drvlc503ApplicationJSONErrorDescriptionEnum errorDescription;

    public Drvlc503ApplicationJSON withErrorDescription(Drvlc503ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Drvlc503ApplicationJSON(){}
}
