package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAppRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public UpdateAppRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateAppRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateAppRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleName")
    public String roleName;
    public UpdateAppRequest withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverGroups")
    public ServerGroup[] serverGroups;
    public UpdateAppRequest withServerGroups(ServerGroup[] serverGroups) {
        this.serverGroups = serverGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public UpdateAppRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}