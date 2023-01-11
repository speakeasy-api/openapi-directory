package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Group
 * A group object, which contains a specified group’s metadata and attributes.
**/
public class Group {
    @JsonProperty("DisplayName")
    public String displayName;
    public Group withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("GroupId")
    public String groupId;
    public Group withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}