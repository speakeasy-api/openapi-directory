package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGroupResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Group")
    public Group group;
    public CreateGroupResult withGroup(Group group) {
        this.group = group;
        return this;
    }
}