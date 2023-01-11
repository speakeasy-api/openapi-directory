package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Query
 * Defines the query to run against an object.
**/
public class Query {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectors")
    public Selector[] selectors;
    public Query withSelectors(Selector[] selectors) {
        this.selectors = selectors;
        return this;
    }
}