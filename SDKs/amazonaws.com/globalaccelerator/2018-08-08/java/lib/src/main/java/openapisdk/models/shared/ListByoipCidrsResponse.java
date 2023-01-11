package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListByoipCidrsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ByoipCidrs")
    public ByoipCidr[] byoipCidrs;
    public ListByoipCidrsResponse withByoipCidrs(ByoipCidr[] byoipCidrs) {
        this.byoipCidrs = byoipCidrs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListByoipCidrsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}