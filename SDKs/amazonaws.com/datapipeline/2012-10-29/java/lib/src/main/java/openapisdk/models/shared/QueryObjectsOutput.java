package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryObjectsOutput
 * Contains the output of QueryObjects.
**/
public class QueryObjectsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasMoreResults")
    public Boolean hasMoreResults;
    public QueryObjectsOutput withHasMoreResults(Boolean hasMoreResults) {
        this.hasMoreResults = hasMoreResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public QueryObjectsOutput withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marker")
    public String marker;
    public QueryObjectsOutput withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}