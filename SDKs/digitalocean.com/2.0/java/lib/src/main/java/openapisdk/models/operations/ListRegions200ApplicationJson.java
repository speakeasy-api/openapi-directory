package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRegions200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public openapisdk.models.shared.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsPropertiesRegion[] regions;
    public ListRegions200ApplicationJson withRegions(openapisdk.models.shared.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsPropertiesRegion[] regions) {
        this.regions = regions;
        return this;
    }
}