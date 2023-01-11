package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRegexPatternSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListRegexPatternSetsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegexPatternSets")
    public RegexPatternSetSummary[] regexPatternSets;
    public ListRegexPatternSetsResponse withRegexPatternSets(RegexPatternSetSummary[] regexPatternSets) {
        this.regexPatternSets = regexPatternSets;
        return this;
    }
}