package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribePermissionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamUserArn")
    public String iamUserArn;
    public DescribePermissionsRequest withIamUserArn(String iamUserArn) {
        this.iamUserArn = iamUserArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackId")
    public String stackId;
    public DescribePermissionsRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}