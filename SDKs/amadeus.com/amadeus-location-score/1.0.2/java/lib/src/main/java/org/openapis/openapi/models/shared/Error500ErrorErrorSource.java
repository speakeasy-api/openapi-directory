/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Error500ErrorErrorSource {
    /**
     * A sample input to guide the user when resolving this issue
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("example")
    public String example;

    public Error500ErrorErrorSource withExample(String example) {
        this.example = example;
        return this;
    }
    
    /**
     * The key of the URI path or query parameter that caused the error
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameter")
    public String parameter;

    public Error500ErrorErrorSource withParameter(String parameter) {
        this.parameter = parameter;
        return this;
    }
    
    /**
     * A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointer")
    public String pointer;

    public Error500ErrorErrorSource withPointer(String pointer) {
        this.pointer = pointer;
        return this;
    }
    
    public Error500ErrorErrorSource(){}
}
