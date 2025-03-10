/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ListResourcePoliciesRequestBody {
    /**
     * Not currently supported.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;

    public ListResourcePoliciesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public ListResourcePoliciesRequestBody(){}
}
