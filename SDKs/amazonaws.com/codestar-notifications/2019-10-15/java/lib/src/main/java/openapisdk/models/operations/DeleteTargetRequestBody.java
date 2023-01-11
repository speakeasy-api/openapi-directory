package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteTargetRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForceUnsubscribeAll")
    public Boolean forceUnsubscribeAll;
    public DeleteTargetRequestBody withForceUnsubscribeAll(Boolean forceUnsubscribeAll) {
        this.forceUnsubscribeAll = forceUnsubscribeAll;
        return this;
    }
    @JsonProperty("TargetAddress")
    public String targetAddress;
    public DeleteTargetRequestBody withTargetAddress(String targetAddress) {
        this.targetAddress = targetAddress;
        return this;
    }
}