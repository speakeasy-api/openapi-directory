/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ErrorFieldTypeWrapper {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorFieldType")
    public ErrorFieldType errorFieldType;

    public ErrorFieldTypeWrapper withErrorFieldType(ErrorFieldType errorFieldType) {
        this.errorFieldType = errorFieldType;
        return this;
    }
    
    public ErrorFieldTypeWrapper(){}
}
