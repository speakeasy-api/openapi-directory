package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeFleetRequestBody {
    @JsonProperty("fleet")
    public String fleet;
    public DescribeFleetRequestBody withFleet(String fleet) {
        this.fleet = fleet;
        return this;
    }
}