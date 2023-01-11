package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupEntity
 * List Groups
**/
public class GroupEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin_ids")
    public String adminIds;
    public GroupEntity withAdminIds(String adminIds) {
        this.adminIds = adminIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public GroupEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GroupEntity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public GroupEntity withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_ids")
    public Integer[] userIds;
    public GroupEntity withUserIds(Integer[] userIds) {
        this.userIds = userIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usernames")
    public String[] usernames;
    public GroupEntity withUsernames(String[] usernames) {
        this.usernames = usernames;
        return this;
    }
}