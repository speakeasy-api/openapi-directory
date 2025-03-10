/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PutProjectPolicyRequest {
    @JsonProperty("PolicyDocument")
    public String policyDocument;

    public PutProjectPolicyRequest withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    
    @JsonProperty("PolicyName")
    public String policyName;

    public PutProjectPolicyRequest withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyRevisionId")
    public String policyRevisionId;

    public PutProjectPolicyRequest withPolicyRevisionId(String policyRevisionId) {
        this.policyRevisionId = policyRevisionId;
        return this;
    }
    
    @JsonProperty("ProjectArn")
    public String projectArn;

    public PutProjectPolicyRequest withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
    
    public PutProjectPolicyRequest(@JsonProperty("PolicyDocument") String policyDocument, @JsonProperty("PolicyName") String policyName, @JsonProperty("ProjectArn") String projectArn) {
        this.policyDocument = policyDocument;
        this.policyName = policyName;
        this.projectArn = projectArn;
  }
}
