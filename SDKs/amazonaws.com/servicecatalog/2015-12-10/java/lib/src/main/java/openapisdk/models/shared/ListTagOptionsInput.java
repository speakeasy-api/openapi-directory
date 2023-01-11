package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTagOptionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public ListTagOptionsFilters filters;
    public ListTagOptionsInput withFilters(ListTagOptionsFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageSize")
    public Long pageSize;
    public ListTagOptionsInput withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageToken")
    public String pageToken;
    public ListTagOptionsInput withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}