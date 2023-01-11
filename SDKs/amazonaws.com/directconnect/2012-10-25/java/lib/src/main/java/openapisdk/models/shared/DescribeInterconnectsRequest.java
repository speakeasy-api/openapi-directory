package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeInterconnectsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interconnectId")
    public String interconnectId;
    public DescribeInterconnectsRequest withInterconnectId(String interconnectId) {
        this.interconnectId = interconnectId;
        return this;
    }
}