package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAcceleratorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Accelerators")
    public Accelerator[] accelerators;
    public ListAcceleratorsResponse withAccelerators(Accelerator[] accelerators) {
        this.accelerators = accelerators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAcceleratorsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}