/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Alimw500ApplicationJSON - Internal server error
 */
public class Alimw500ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Alimw500ApplicationJSONErrorEnum error;

    public Alimw500ApplicationJSON withError(Alimw500ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Alimw500ApplicationJSONErrorDescriptionEnum errorDescription;

    public Alimw500ApplicationJSON withErrorDescription(Alimw500ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Alimw500ApplicationJSON(){}
}
