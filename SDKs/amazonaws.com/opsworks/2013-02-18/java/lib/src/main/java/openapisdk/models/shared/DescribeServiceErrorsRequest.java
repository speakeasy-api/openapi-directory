package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeServiceErrorsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public DescribeServiceErrorsRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceErrorIds")
    public String[] serviceErrorIds;
    public DescribeServiceErrorsRequest withServiceErrorIds(String[] serviceErrorIds) {
        this.serviceErrorIds = serviceErrorIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackId")
    public String stackId;
    public DescribeServiceErrorsRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}