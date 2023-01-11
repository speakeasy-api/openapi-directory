package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateIndexingConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupIndexingConfiguration")
    public UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration thingGroupIndexingConfiguration;
    public UpdateIndexingConfigurationRequestBody withThingGroupIndexingConfiguration(UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration thingGroupIndexingConfiguration) {
        this.thingGroupIndexingConfiguration = thingGroupIndexingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingIndexingConfiguration")
    public UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration thingIndexingConfiguration;
    public UpdateIndexingConfigurationRequestBody withThingIndexingConfiguration(UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration thingIndexingConfiguration) {
        this.thingIndexingConfiguration = thingIndexingConfiguration;
        return this;
    }
}