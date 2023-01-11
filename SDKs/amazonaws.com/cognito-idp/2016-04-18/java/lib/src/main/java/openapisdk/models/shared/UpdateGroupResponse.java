package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Group")
    public GroupType group;
    public UpdateGroupResponse withGroup(GroupType group) {
        this.group = group;
        return this;
    }
}