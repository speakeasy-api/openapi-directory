package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration
 * Thing group indexing configuration.
**/
public class UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public openapisdk.models.shared.Field[] customFields;
    public UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration withCustomFields(openapisdk.models.shared.Field[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedFields")
    public openapisdk.models.shared.Field[] managedFields;
    public UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration withManagedFields(openapisdk.models.shared.Field[] managedFields) {
        this.managedFields = managedFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingGroupIndexingMode")
    public openapisdk.models.shared.ThingGroupIndexingModeEnum thingGroupIndexingMode;
    public UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration withThingGroupIndexingMode(openapisdk.models.shared.ThingGroupIndexingModeEnum thingGroupIndexingMode) {
        this.thingGroupIndexingMode = thingGroupIndexingMode;
        return this;
    }
}