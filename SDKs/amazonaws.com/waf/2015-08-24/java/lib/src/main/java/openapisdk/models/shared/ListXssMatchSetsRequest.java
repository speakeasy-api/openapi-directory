package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListXssMatchSetsRequest
 * A request to list the <a>XssMatchSet</a> objects created by the current AWS account.
**/
public class ListXssMatchSetsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListXssMatchSetsRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListXssMatchSetsRequest withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}