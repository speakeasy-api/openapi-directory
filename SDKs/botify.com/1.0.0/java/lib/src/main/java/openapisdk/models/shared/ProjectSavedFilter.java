package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectSavedFilter {
    @JsonProperty("filters")
    public java.util.Map<String, Object> filters;
    public ProjectSavedFilter withFilters(java.util.Map<String, Object> filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public String identifier;
    public ProjectSavedFilter withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ProjectSavedFilter withName(String name) {
        this.name = name;
        return this;
    }
}