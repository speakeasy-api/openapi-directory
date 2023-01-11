package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSizeConstraintSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListSizeConstraintSetsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeConstraintSets")
    public SizeConstraintSetSummary[] sizeConstraintSets;
    public ListSizeConstraintSetsResponse withSizeConstraintSets(SizeConstraintSetSummary[] sizeConstraintSets) {
        this.sizeConstraintSets = sizeConstraintSets;
        return this;
    }
}