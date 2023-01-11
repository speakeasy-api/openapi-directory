package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeEndpointResponse
 * The output from the DescribeEndpoint operation.
**/
public class DescribeEndpointResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointAddress")
    public String endpointAddress;
    public DescribeEndpointResponse withEndpointAddress(String endpointAddress) {
        this.endpointAddress = endpointAddress;
        return this;
    }
}