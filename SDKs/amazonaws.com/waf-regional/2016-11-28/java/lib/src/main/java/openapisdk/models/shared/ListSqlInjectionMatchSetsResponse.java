package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSqlInjectionMatchSetsResponse
 * The response to a <a>ListSqlInjectionMatchSets</a> request.
**/
public class ListSqlInjectionMatchSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListSqlInjectionMatchSetsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SqlInjectionMatchSets")
    public SqlInjectionMatchSetSummary[] sqlInjectionMatchSets;
    public ListSqlInjectionMatchSetsResponse withSqlInjectionMatchSets(SqlInjectionMatchSetSummary[] sqlInjectionMatchSets) {
        this.sqlInjectionMatchSets = sqlInjectionMatchSets;
        return this;
    }
}