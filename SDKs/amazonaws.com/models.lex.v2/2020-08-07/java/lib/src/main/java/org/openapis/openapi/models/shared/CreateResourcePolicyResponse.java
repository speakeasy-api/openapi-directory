/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateResourcePolicyResponse - Success
 */
public class CreateResourcePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArn")
    public String resourceArn;

    public CreateResourcePolicyResponse withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;

    public CreateResourcePolicyResponse withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    
    public CreateResourcePolicyResponse(){}
}
