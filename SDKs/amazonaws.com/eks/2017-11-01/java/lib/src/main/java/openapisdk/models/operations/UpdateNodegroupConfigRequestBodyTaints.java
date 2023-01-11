package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNodegroupConfigRequestBodyTaints
 * An object representing the details of an update to a taints payload.
**/
public class UpdateNodegroupConfigRequestBodyTaints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addOrUpdateTaints")
    public openapisdk.models.shared.Taint[] addOrUpdateTaints;
    public UpdateNodegroupConfigRequestBodyTaints withAddOrUpdateTaints(openapisdk.models.shared.Taint[] addOrUpdateTaints) {
        this.addOrUpdateTaints = addOrUpdateTaints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeTaints")
    public openapisdk.models.shared.Taint[] removeTaints;
    public UpdateNodegroupConfigRequestBodyTaints withRemoveTaints(openapisdk.models.shared.Taint[] removeTaints) {
        this.removeTaints = removeTaints;
        return this;
    }
}