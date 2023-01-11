package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSqlInjectionMatchSetsRequest
 * A request to list the <a>SqlInjectionMatchSet</a> objects created by the current AWS account.
**/
public class ListSqlInjectionMatchSetsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListSqlInjectionMatchSetsRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListSqlInjectionMatchSetsRequest withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}