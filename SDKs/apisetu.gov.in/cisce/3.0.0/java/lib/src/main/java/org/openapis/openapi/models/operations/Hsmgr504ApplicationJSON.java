/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Hsmgr504ApplicationJSON - Gateway timeout
 */
public class Hsmgr504ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Hsmgr504ApplicationJSONErrorEnum error;

    public Hsmgr504ApplicationJSON withError(Hsmgr504ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Hsmgr504ApplicationJSONErrorDescriptionEnum errorDescription;

    public Hsmgr504ApplicationJSON withErrorDescription(Hsmgr504ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Hsmgr504ApplicationJSON(){}
}
