/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Drvlc401ApplicationJSON - Unauthorized access
 */
public class Drvlc401ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Drvlc401ApplicationJSONErrorEnum error;

    public Drvlc401ApplicationJSON withError(Drvlc401ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Drvlc401ApplicationJSONErrorDescriptionEnum errorDescription;

    public Drvlc401ApplicationJSON withErrorDescription(Drvlc401ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Drvlc401ApplicationJSON(){}
}
