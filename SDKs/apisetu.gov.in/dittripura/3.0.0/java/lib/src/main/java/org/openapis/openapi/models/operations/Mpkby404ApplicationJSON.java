/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Mpkby404ApplicationJSON - No record found
 */
public class Mpkby404ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Mpkby404ApplicationJSONErrorEnum error;

    public Mpkby404ApplicationJSON withError(Mpkby404ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Mpkby404ApplicationJSONErrorDescriptionEnum errorDescription;

    public Mpkby404ApplicationJSON withErrorDescription(Mpkby404ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Mpkby404ApplicationJSON(){}
}
