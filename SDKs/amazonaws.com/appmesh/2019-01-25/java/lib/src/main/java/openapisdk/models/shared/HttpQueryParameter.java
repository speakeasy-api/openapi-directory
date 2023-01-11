package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpQueryParameter
 * An object that represents the query parameter in the request.
**/
public class HttpQueryParameter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("match")
    public QueryParameterMatch match;
    public HttpQueryParameter withMatch(QueryParameterMatch match) {
        this.match = match;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public HttpQueryParameter withName(String name) {
        this.name = name;
        return this;
    }
}