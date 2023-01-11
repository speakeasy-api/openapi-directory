package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public java.util.Map<String, Object>[] steps;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress withSteps(java.util.Map<String, Object>[] steps) {
        this.steps = steps;
        return this;
    }
}