package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListXssMatchSetsResponse
 * The response to a <a>ListXssMatchSets</a> request.
**/
public class ListXssMatchSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListXssMatchSetsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("XssMatchSets")
    public XssMatchSetSummary[] xssMatchSets;
    public ListXssMatchSetsResponse withXssMatchSets(XssMatchSetSummary[] xssMatchSets) {
        this.xssMatchSets = xssMatchSets;
        return this;
    }
}