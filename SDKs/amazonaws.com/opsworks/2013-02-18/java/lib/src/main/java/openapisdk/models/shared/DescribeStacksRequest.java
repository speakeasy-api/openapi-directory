package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeStacksRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackIds")
    public String[] stackIds;
    public DescribeStacksRequest withStackIds(String[] stackIds) {
        this.stackIds = stackIds;
        return this;
    }
}