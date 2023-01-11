package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceInfo")
    public ResourceInfo resourceInfo;
    public DescribeResourceResponse withResourceInfo(ResourceInfo resourceInfo) {
        this.resourceInfo = resourceInfo;
        return this;
    }
}