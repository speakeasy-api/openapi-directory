package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeClientPropertiesRequest {
    @JsonProperty("ResourceIds")
    public String[] resourceIds;
    public DescribeClientPropertiesRequest withResourceIds(String[] resourceIds) {
        this.resourceIds = resourceIds;
        return this;
    }
}