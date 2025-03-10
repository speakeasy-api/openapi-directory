/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Pvcer504ApplicationJSON - Gateway timeout
 */
public class Pvcer504ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Pvcer504ApplicationJSONErrorEnum error;

    public Pvcer504ApplicationJSON withError(Pvcer504ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Pvcer504ApplicationJSONErrorDescriptionEnum errorDescription;

    public Pvcer504ApplicationJSON withErrorDescription(Pvcer504ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Pvcer504ApplicationJSON(){}
}
