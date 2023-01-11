package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UrlsQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String[] fields;
    public UrlsQuery withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public java.util.Map<String, Object> filters;
    public UrlsQuery withFilters(java.util.Map<String, Object> filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public java.util.Map<String, Object>[] sort;
    public UrlsQuery withSort(java.util.Map<String, Object>[] sort) {
        this.sort = sort;
        return this;
    }
}