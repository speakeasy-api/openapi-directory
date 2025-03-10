/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Epfsc404ApplicationJSON - No record found
 */
public class Epfsc404ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Epfsc404ApplicationJSONErrorEnum error;

    public Epfsc404ApplicationJSON withError(Epfsc404ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Epfsc404ApplicationJSONErrorDescriptionEnum errorDescription;

    public Epfsc404ApplicationJSON withErrorDescription(Epfsc404ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Epfsc404ApplicationJSON(){}
}
