/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Dccer502ApplicationJSON - Bad gateway
 */
public class Dccer502ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Dccer502ApplicationJSONErrorEnum error;

    public Dccer502ApplicationJSON withError(Dccer502ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Dccer502ApplicationJSONErrorDescriptionEnum errorDescription;

    public Dccer502ApplicationJSON withErrorDescription(Dccer502ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Dccer502ApplicationJSON(){}
}
