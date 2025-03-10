/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Ercer504ApplicationJSON - Gateway timeout
 */
public class Ercer504ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Ercer504ApplicationJSONErrorEnum error;

    public Ercer504ApplicationJSON withError(Ercer504ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Ercer504ApplicationJSONErrorDescriptionEnum errorDescription;

    public Ercer504ApplicationJSON withErrorDescription(Ercer504ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Ercer504ApplicationJSON(){}
}
