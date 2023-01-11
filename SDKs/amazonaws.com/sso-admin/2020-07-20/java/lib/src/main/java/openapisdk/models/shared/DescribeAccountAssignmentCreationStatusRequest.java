package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAccountAssignmentCreationStatusRequest {
    @JsonProperty("AccountAssignmentCreationRequestId")
    public String accountAssignmentCreationRequestId;
    public DescribeAccountAssignmentCreationStatusRequest withAccountAssignmentCreationRequestId(String accountAssignmentCreationRequestId) {
        this.accountAssignmentCreationRequestId = accountAssignmentCreationRequestId;
        return this;
    }
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public DescribeAccountAssignmentCreationStatusRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
}