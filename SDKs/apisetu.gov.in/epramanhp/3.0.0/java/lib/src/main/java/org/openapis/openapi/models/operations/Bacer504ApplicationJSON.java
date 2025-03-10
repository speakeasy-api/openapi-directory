/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Bacer504ApplicationJSON - Gateway timeout
 */
public class Bacer504ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Bacer504ApplicationJSONErrorEnum error;

    public Bacer504ApplicationJSON withError(Bacer504ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Bacer504ApplicationJSONErrorDescriptionEnum errorDescription;

    public Bacer504ApplicationJSON withErrorDescription(Bacer504ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Bacer504ApplicationJSON(){}
}
