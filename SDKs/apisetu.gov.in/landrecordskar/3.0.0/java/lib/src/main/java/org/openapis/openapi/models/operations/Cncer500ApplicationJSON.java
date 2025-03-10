/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Cncer500ApplicationJSON - Internal server error
 */
public class Cncer500ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Cncer500ApplicationJSONErrorEnum error;

    public Cncer500ApplicationJSON withError(Cncer500ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Cncer500ApplicationJSONErrorDescriptionEnum errorDescription;

    public Cncer500ApplicationJSON withErrorDescription(Cncer500ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Cncer500ApplicationJSON(){}
}
