/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SingleComparisonTest - An array of Configuration objects. Within each configuration is an array of browsers
 */
public class SingleComparisonTest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base")
    public SingleComparisonTestBase base;

    public SingleComparisonTest withBase(SingleComparisonTestBase base) {
        this.base = base;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public Target target;

    public SingleComparisonTest withTarget(Target target) {
        this.target = target;
        return this;
    }
    
    public SingleComparisonTest(){}
}
