/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Cemst404ApplicationJSON - No record found
 */
public class Cemst404ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Cemst404ApplicationJSONErrorEnum error;

    public Cemst404ApplicationJSON withError(Cemst404ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Cemst404ApplicationJSONErrorDescriptionEnum errorDescription;

    public Cemst404ApplicationJSON withErrorDescription(Cemst404ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Cemst404ApplicationJSON(){}
}
