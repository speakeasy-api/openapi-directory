/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Cyipc503ApplicationJSON - Service unavailable
 */
public class Cyipc503ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Cyipc503ApplicationJSONErrorEnum error;

    public Cyipc503ApplicationJSON withError(Cyipc503ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Cyipc503ApplicationJSONErrorDescriptionEnum errorDescription;

    public Cyipc503ApplicationJSON withErrorDescription(Cyipc503ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Cyipc503ApplicationJSON(){}
}
