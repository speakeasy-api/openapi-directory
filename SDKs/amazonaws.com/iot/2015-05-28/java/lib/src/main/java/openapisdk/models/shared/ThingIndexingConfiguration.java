package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThingIndexingConfiguration
 * The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
**/
public class ThingIndexingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public Field[] customFields;
    public ThingIndexingConfiguration withCustomFields(Field[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedFields")
    public Field[] managedFields;
    public ThingIndexingConfiguration withManagedFields(Field[] managedFields) {
        this.managedFields = managedFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingConnectivityIndexingMode")
    public ThingConnectivityIndexingModeEnum thingConnectivityIndexingMode;
    public ThingIndexingConfiguration withThingConnectivityIndexingMode(ThingConnectivityIndexingModeEnum thingConnectivityIndexingMode) {
        this.thingConnectivityIndexingMode = thingConnectivityIndexingMode;
        return this;
    }
    @JsonProperty("thingIndexingMode")
    public ThingIndexingModeEnum thingIndexingMode;
    public ThingIndexingConfiguration withThingIndexingMode(ThingIndexingModeEnum thingIndexingMode) {
        this.thingIndexingMode = thingIndexingMode;
        return this;
    }
}