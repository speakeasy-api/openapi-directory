package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutDedicatedIpInPoolRequestBody {
    @JsonProperty("DestinationPoolName")
    public String destinationPoolName;
    public PutDedicatedIpInPoolRequestBody withDestinationPoolName(String destinationPoolName) {
        this.destinationPoolName = destinationPoolName;
        return this;
    }
}