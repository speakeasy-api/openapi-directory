package openapisdk.models.shared;

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
}