package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAppRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateAppRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateAppRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateAppRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleName")
    public String roleName;
    public CreateAppRequest withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverGroups")
    public ServerGroup[] serverGroups;
    public CreateAppRequest withServerGroups(ServerGroup[] serverGroups) {
        this.serverGroups = serverGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateAppRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}