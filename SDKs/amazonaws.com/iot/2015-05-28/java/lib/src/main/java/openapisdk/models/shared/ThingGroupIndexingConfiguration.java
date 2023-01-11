package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThingGroupIndexingConfiguration
 * Thing group indexing configuration.
**/
public class ThingGroupIndexingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public Field[] customFields;
    public ThingGroupIndexingConfiguration withCustomFields(Field[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedFields")
    public Field[] managedFields;
    public ThingGroupIndexingConfiguration withManagedFields(Field[] managedFields) {
        this.managedFields = managedFields;
        return this;
    }
    @JsonProperty("thingGroupIndexingMode")
    public ThingGroupIndexingModeEnum thingGroupIndexingMode;
    public ThingGroupIndexingConfiguration withThingGroupIndexingMode(ThingGroupIndexingModeEnum thingGroupIndexingMode) {
        this.thingGroupIndexingMode = thingGroupIndexingMode;
        return this;
    }
}