package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetInstanceAccessOutput
 * Represents the returned data in response to a request operation.
**/
public class GetInstanceAccessOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceAccess")
    public InstanceAccess instanceAccess;
    public GetInstanceAccessOutput withInstanceAccess(InstanceAccess instanceAccess) {
        this.instanceAccess = instanceAccess;
        return this;
    }
}