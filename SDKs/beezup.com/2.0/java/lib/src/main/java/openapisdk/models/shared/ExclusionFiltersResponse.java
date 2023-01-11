package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExclusionFiltersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusionFilters")
    public ExclusionFilter[] exclusionFilters;
    public ExclusionFiltersResponse withExclusionFilters(ExclusionFilter[] exclusionFilters) {
        this.exclusionFilters = exclusionFilters;
        return this;
    }
    @JsonProperty("links")
    public ExclusionFiltersResponseLinks links;
    public ExclusionFiltersResponse withLinks(ExclusionFiltersResponseLinks links) {
        this.links = links;
        return this;
    }
}