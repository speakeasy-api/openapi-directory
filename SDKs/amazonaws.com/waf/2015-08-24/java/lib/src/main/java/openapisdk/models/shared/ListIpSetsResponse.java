package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIpSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IPSets")
    public IpSetSummary[] ipSets;
    public ListIpSetsResponse withIpSets(IpSetSummary[] ipSets) {
        this.ipSets = ipSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListIpSetsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}