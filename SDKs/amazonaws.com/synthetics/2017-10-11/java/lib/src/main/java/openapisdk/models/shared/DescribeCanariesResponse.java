package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCanariesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Canaries")
    public Canary[] canaries;
    public DescribeCanariesResponse withCanaries(Canary[] canaries) {
        this.canaries = canaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeCanariesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}