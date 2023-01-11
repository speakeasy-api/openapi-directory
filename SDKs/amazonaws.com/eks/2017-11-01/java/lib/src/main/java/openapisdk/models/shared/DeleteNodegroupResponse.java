package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteNodegroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodegroup")
    public Nodegroup nodegroup;
    public DeleteNodegroupResponse withNodegroup(Nodegroup nodegroup) {
        this.nodegroup = nodegroup;
        return this;
    }
}