package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateTargetsWithJobRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public AssociateTargetsWithJobRequestBody withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("targets")
    public String[] targets;
    public AssociateTargetsWithJobRequestBody withTargets(String[] targets) {
        this.targets = targets;
        return this;
    }
}