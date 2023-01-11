package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTagValuesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public GetTagValuesOutput withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagValues")
    public String[] tagValues;
    public GetTagValuesOutput withTagValues(String[] tagValues) {
        this.tagValues = tagValues;
        return this;
    }
}