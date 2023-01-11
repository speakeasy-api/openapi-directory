package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeStackProvisioningParametersRequest {
    @JsonProperty("StackId")
    public String stackId;
    public DescribeStackProvisioningParametersRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}