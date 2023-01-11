package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetIndexingConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupIndexingConfiguration")
    public ThingGroupIndexingConfiguration thingGroupIndexingConfiguration;
    public GetIndexingConfigurationResponse withThingGroupIndexingConfiguration(ThingGroupIndexingConfiguration thingGroupIndexingConfiguration) {
        this.thingGroupIndexingConfiguration = thingGroupIndexingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingIndexingConfiguration")
    public ThingIndexingConfiguration thingIndexingConfiguration;
    public GetIndexingConfigurationResponse withThingIndexingConfiguration(ThingIndexingConfiguration thingIndexingConfiguration) {
        this.thingIndexingConfiguration = thingIndexingConfiguration;
        return this;
    }
}