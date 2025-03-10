/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ArrayPropertiesSummary - An object that represents the array properties of a job.
 */
public class ArrayPropertiesSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Long index;

    public ArrayPropertiesSummary withIndex(Long index) {
        this.index = index;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;

    public ArrayPropertiesSummary withSize(Long size) {
        this.size = size;
        return this;
    }
    
    public ArrayPropertiesSummary(){}
}
