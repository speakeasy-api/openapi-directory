package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomRoutingAcceleratorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Accelerators")
    public CustomRoutingAccelerator[] accelerators;
    public ListCustomRoutingAcceleratorsResponse withAccelerators(CustomRoutingAccelerator[] accelerators) {
        this.accelerators = accelerators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCustomRoutingAcceleratorsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}