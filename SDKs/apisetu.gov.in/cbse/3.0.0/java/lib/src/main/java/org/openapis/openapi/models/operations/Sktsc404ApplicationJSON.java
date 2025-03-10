/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Sktsc404ApplicationJSON - No record found
 */
public class Sktsc404ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Sktsc404ApplicationJSONErrorEnum error;

    public Sktsc404ApplicationJSON withError(Sktsc404ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Sktsc404ApplicationJSONErrorDescriptionEnum errorDescription;

    public Sktsc404ApplicationJSON withErrorDescription(Sktsc404ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Sktsc404ApplicationJSON(){}
}
