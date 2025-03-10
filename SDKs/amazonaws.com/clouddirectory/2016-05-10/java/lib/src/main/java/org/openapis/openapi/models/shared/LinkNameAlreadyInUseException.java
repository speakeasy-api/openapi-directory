/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LinkNameAlreadyInUseException - Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.
 */
public class LinkNameAlreadyInUseException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;

    public LinkNameAlreadyInUseException withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public LinkNameAlreadyInUseException(){}
}
