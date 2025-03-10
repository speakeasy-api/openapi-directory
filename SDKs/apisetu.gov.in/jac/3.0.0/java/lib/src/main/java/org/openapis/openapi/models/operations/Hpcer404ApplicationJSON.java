/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Hpcer404ApplicationJSON - No record found
 */
public class Hpcer404ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Hpcer404ApplicationJSONErrorEnum error;

    public Hpcer404ApplicationJSON withError(Hpcer404ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Hpcer404ApplicationJSONErrorDescriptionEnum errorDescription;

    public Hpcer404ApplicationJSON withErrorDescription(Hpcer404ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Hpcer404ApplicationJSON(){}
}
