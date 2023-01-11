package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupMappingGroups {
    @JsonProperty("group_description")
    public String groupDescription;
    public GroupMappingGroups withGroupDescription(String groupDescription) {
        this.groupDescription = groupDescription;
        return this;
    }
    @JsonProperty("group_id")
    public String groupId;
    public GroupMappingGroups withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("group_name")
    public String groupName;
    public GroupMappingGroups withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GroupMappingGroups withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synced_at")
    public String syncedAt;
    public GroupMappingGroups withSyncedAt(String syncedAt) {
        this.syncedAt = syncedAt;
        return this;
    }
}