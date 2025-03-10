/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Srcer401ApplicationJSON - Unauthorized access
 */
public class Srcer401ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Srcer401ApplicationJSONErrorEnum error;

    public Srcer401ApplicationJSON withError(Srcer401ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Srcer401ApplicationJSONErrorDescriptionEnum errorDescription;

    public Srcer401ApplicationJSON withErrorDescription(Srcer401ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Srcer401ApplicationJSON(){}
}
