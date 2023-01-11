package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGroupResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Group")
    public Group group;
    public UpdateGroupResult withGroup(Group group) {
        this.group = group;
        return this;
    }
}