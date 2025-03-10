/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Sicrd404ApplicationJSON - No record found
 */
public class Sicrd404ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Sicrd404ApplicationJSONErrorEnum error;

    public Sicrd404ApplicationJSON withError(Sicrd404ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Sicrd404ApplicationJSONErrorDescriptionEnum errorDescription;

    public Sicrd404ApplicationJSON withErrorDescription(Sicrd404ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Sicrd404ApplicationJSON(){}
}
