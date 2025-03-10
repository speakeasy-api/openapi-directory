/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetParameterHistoryResult - Success
 */
public class GetParameterHistoryResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;

    public GetParameterHistoryResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public ParameterHistory[] parameters;

    public GetParameterHistoryResult withParameters(ParameterHistory[] parameters) {
        this.parameters = parameters;
        return this;
    }
    
    public GetParameterHistoryResult(){}
}
