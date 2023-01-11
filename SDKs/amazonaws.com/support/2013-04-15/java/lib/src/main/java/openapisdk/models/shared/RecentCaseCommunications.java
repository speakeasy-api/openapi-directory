package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecentCaseCommunications
 * The five most recent communications associated with the case.
**/
public class RecentCaseCommunications {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communications")
    public Communication[] communications;
    public RecentCaseCommunications withCommunications(Communication[] communications) {
        this.communications = communications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public RecentCaseCommunications withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}