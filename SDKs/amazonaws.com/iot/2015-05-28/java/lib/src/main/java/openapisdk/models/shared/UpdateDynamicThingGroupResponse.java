package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDynamicThingGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public UpdateDynamicThingGroupResponse withVersion(Long version) {
        this.version = version;
        return this;
    }
}