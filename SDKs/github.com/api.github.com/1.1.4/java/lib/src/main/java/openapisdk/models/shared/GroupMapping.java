package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupMapping
 * External Groups to be mapped to a team for membership
**/
public class GroupMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public GroupMappingGroups[] groups;
    public GroupMapping withGroups(GroupMappingGroups[] groups) {
        this.groups = groups;
        return this;
    }
}