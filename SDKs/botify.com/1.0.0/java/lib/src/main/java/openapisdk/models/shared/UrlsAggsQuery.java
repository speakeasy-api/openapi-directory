package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UrlsAggsQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggs")
    public java.util.Map<String, Object>[] aggs;
    public UrlsAggsQuery withAggs(java.util.Map<String, Object>[] aggs) {
        this.aggs = aggs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public java.util.Map<String, Object> filters;
    public UrlsAggsQuery withFilters(java.util.Map<String, Object> filters) {
        this.filters = filters;
        return this;
    }
}