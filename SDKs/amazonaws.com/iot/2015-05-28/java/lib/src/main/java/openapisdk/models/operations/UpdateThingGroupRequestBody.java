package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateThingGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedVersion")
    public Long expectedVersion;
    public UpdateThingGroupRequestBody withExpectedVersion(Long expectedVersion) {
        this.expectedVersion = expectedVersion;
        return this;
    }
    @JsonProperty("thingGroupProperties")
    public UpdateThingGroupRequestBodyThingGroupProperties thingGroupProperties;
    public UpdateThingGroupRequestBody withThingGroupProperties(UpdateThingGroupRequestBodyThingGroupProperties thingGroupProperties) {
        this.thingGroupProperties = thingGroupProperties;
        return this;
    }
}