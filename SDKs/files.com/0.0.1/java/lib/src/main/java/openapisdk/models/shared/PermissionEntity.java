package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PermissionEntity
 * List Permissions
**/
public class PermissionEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Integer groupId;
    public PermissionEntity withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_name")
    public String groupName;
    public PermissionEntity withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public PermissionEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public PermissionEntity withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public PermissionEntityPermissionEnum permission;
    public PermissionEntity withPermission(PermissionEntityPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recursive")
    public Boolean recursive;
    public PermissionEntity withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Integer userId;
    public PermissionEntity withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public PermissionEntity withUsername(String username) {
        this.username = username;
        return this;
    }
}