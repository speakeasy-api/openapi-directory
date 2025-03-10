/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Tripc400ApplicationJSON - Bad request
 */
public class Tripc400ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Tripc400ApplicationJSONErrorEnum error;

    public Tripc400ApplicationJSON withError(Tripc400ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Tripc400ApplicationJSONErrorDescriptionEnum errorDescription;

    public Tripc400ApplicationJSON withErrorDescription(Tripc400ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Tripc400ApplicationJSON(){}
}
