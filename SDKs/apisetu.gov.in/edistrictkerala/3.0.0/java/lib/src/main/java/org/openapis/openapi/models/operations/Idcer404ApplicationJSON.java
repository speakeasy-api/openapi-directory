/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Idcer404ApplicationJSON - No record found
 */
public class Idcer404ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Idcer404ApplicationJSONErrorEnum error;

    public Idcer404ApplicationJSON withError(Idcer404ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Idcer404ApplicationJSONErrorDescriptionEnum errorDescription;

    public Idcer404ApplicationJSON withErrorDescription(Idcer404ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Idcer404ApplicationJSON(){}
}
