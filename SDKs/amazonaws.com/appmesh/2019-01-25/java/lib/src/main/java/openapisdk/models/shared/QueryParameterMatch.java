package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryParameterMatch
 * An object representing the query parameter to match.
**/
public class QueryParameterMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exact")
    public String exact;
    public QueryParameterMatch withExact(String exact) {
        this.exact = exact;
        return this;
    }
}