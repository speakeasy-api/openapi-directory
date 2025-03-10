/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Dpcer500ApplicationJSON - Internal server error
 */
public class Dpcer500ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Dpcer500ApplicationJSONErrorEnum error;

    public Dpcer500ApplicationJSON withError(Dpcer500ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Dpcer500ApplicationJSONErrorDescriptionEnum errorDescription;

    public Dpcer500ApplicationJSON withErrorDescription(Dpcer500ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Dpcer500ApplicationJSON(){}
}
