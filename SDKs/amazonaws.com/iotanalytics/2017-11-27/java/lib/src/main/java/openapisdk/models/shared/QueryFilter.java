package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryFilter
 * Information that is used to filter message data, to segregate it according to the timeframe in which it arrives.
**/
public class QueryFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaTime")
    public DeltaTime deltaTime;
    public QueryFilter withDeltaTime(DeltaTime deltaTime) {
        this.deltaTime = deltaTime;
        return this;
    }
}