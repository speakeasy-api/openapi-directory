package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInstanceAccessDetailsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessDetails")
    public InstanceAccessDetails accessDetails;
    public GetInstanceAccessDetailsResult withAccessDetails(InstanceAccessDetails accessDetails) {
        this.accessDetails = accessDetails;
        return this;
    }
}