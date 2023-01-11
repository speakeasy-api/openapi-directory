package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRegexMatchSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListRegexMatchSetsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegexMatchSets")
    public RegexMatchSetSummary[] regexMatchSets;
    public ListRegexMatchSetsResponse withRegexMatchSets(RegexMatchSetSummary[] regexMatchSets) {
        this.regexMatchSets = regexMatchSets;
        return this;
    }
}