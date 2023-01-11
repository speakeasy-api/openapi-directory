package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAcLsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ACLs")
    public Acl[] acLs;
    public DescribeAcLsResponse withAcLs(Acl[] acLs) {
        this.acLs = acLs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeAcLsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}