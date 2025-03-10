/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAccountAssignmentDeletionStatusRequest {
    @JsonProperty("AccountAssignmentDeletionRequestId")
    public String accountAssignmentDeletionRequestId;

    public DescribeAccountAssignmentDeletionStatusRequest withAccountAssignmentDeletionRequestId(String accountAssignmentDeletionRequestId) {
        this.accountAssignmentDeletionRequestId = accountAssignmentDeletionRequestId;
        return this;
    }
    
    @JsonProperty("InstanceArn")
    public String instanceArn;

    public DescribeAccountAssignmentDeletionStatusRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    
    public DescribeAccountAssignmentDeletionStatusRequest(@JsonProperty("AccountAssignmentDeletionRequestId") String accountAssignmentDeletionRequestId, @JsonProperty("InstanceArn") String instanceArn) {
        this.accountAssignmentDeletionRequestId = accountAssignmentDeletionRequestId;
        this.instanceArn = instanceArn;
  }
}
