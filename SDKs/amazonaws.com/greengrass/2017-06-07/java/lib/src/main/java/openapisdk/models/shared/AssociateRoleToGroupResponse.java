package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateRoleToGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociatedAt")
    public String associatedAt;
    public AssociateRoleToGroupResponse withAssociatedAt(String associatedAt) {
        this.associatedAt = associatedAt;
        return this;
    }
}