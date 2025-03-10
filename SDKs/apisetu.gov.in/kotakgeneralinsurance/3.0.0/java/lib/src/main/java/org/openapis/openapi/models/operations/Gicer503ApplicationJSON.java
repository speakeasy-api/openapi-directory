/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Gicer503ApplicationJSON - Service unavailable
 */
public class Gicer503ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Gicer503ApplicationJSONErrorEnum error;

    public Gicer503ApplicationJSON withError(Gicer503ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Gicer503ApplicationJSONErrorDescriptionEnum errorDescription;

    public Gicer503ApplicationJSON withErrorDescription(Gicer503ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Gicer503ApplicationJSON(){}
}
