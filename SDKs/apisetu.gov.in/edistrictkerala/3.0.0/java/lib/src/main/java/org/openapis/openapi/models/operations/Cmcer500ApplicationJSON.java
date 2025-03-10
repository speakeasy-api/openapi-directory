/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Cmcer500ApplicationJSON - Internal server error
 */
public class Cmcer500ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Cmcer500ApplicationJSONErrorEnum error;

    public Cmcer500ApplicationJSON withError(Cmcer500ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Cmcer500ApplicationJSONErrorDescriptionEnum errorDescription;

    public Cmcer500ApplicationJSON withErrorDescription(Cmcer500ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Cmcer500ApplicationJSON(){}
}
