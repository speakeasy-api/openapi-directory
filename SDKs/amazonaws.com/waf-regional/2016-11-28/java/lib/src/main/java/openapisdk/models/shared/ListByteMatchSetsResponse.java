package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListByteMatchSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ByteMatchSets")
    public ByteMatchSetSummary[] byteMatchSets;
    public ListByteMatchSetsResponse withByteMatchSets(ByteMatchSetSummary[] byteMatchSets) {
        this.byteMatchSets = byteMatchSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListByteMatchSetsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}