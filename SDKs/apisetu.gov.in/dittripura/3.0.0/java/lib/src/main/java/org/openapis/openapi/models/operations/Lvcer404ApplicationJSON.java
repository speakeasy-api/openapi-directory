/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Lvcer404ApplicationJSON - No record found
 */
public class Lvcer404ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Lvcer404ApplicationJSONErrorEnum error;

    public Lvcer404ApplicationJSON withError(Lvcer404ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Lvcer404ApplicationJSONErrorDescriptionEnum errorDescription;

    public Lvcer404ApplicationJSON withErrorDescription(Lvcer404ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Lvcer404ApplicationJSON(){}
}
