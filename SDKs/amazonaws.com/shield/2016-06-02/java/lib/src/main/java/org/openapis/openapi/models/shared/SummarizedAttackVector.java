/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SummarizedAttackVector - A summary of information about the attack.
 */
public class SummarizedAttackVector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VectorCounters")
    public SummarizedCounter[] vectorCounters;

    public SummarizedAttackVector withVectorCounters(SummarizedCounter[] vectorCounters) {
        this.vectorCounters = vectorCounters;
        return this;
    }
    
    @JsonProperty("VectorType")
    public String vectorType;

    public SummarizedAttackVector withVectorType(String vectorType) {
        this.vectorType = vectorType;
        return this;
    }
    
    public SummarizedAttackVector(@JsonProperty("VectorType") String vectorType) {
        this.vectorType = vectorType;
  }
}
