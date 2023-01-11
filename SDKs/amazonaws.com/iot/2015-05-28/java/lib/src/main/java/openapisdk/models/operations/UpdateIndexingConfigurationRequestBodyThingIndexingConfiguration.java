package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration
 * The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
**/
public class UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public openapisdk.models.shared.Field[] customFields;
    public UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration withCustomFields(openapisdk.models.shared.Field[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedFields")
    public openapisdk.models.shared.Field[] managedFields;
    public UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration withManagedFields(openapisdk.models.shared.Field[] managedFields) {
        this.managedFields = managedFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingConnectivityIndexingMode")
    public openapisdk.models.shared.ThingConnectivityIndexingModeEnum thingConnectivityIndexingMode;
    public UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration withThingConnectivityIndexingMode(openapisdk.models.shared.ThingConnectivityIndexingModeEnum thingConnectivityIndexingMode) {
        this.thingConnectivityIndexingMode = thingConnectivityIndexingMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingIndexingMode")
    public openapisdk.models.shared.ThingIndexingModeEnum thingIndexingMode;
    public UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration withThingIndexingMode(openapisdk.models.shared.ThingIndexingModeEnum thingIndexingMode) {
        this.thingIndexingMode = thingIndexingMode;
        return this;
    }
}