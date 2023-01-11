package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPartnerEventSourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListPartnerEventSourcesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartnerEventSources")
    public PartnerEventSource[] partnerEventSources;
    public ListPartnerEventSourcesResponse withPartnerEventSources(PartnerEventSource[] partnerEventSources) {
        this.partnerEventSources = partnerEventSources;
        return this;
    }
}