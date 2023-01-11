package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Group")
    public GroupType group;
    public GetGroupResponse withGroup(GroupType group) {
        this.group = group;
        return this;
    }
}