package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListApps200ApplicationJsonAppsDomainsProgress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public java.util.Map<String, Object>[] steps;
    public ListApps200ApplicationJsonAppsDomainsProgress withSteps(java.util.Map<String, Object>[] steps) {
        this.steps = steps;
        return this;
    }
}