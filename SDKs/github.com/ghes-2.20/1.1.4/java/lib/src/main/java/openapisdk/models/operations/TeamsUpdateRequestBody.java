package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsUpdateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TeamsUpdateRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TeamsUpdateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_team_id")
    public Long parentTeamId;
    public TeamsUpdateRequestBody withParentTeamId(Long parentTeamId) {
        this.parentTeamId = parentTeamId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public TeamsUpdateRequestBodyPermissionEnum permission;
    public TeamsUpdateRequestBody withPermission(TeamsUpdateRequestBodyPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public TeamsUpdateRequestBodyPrivacyEnum privacy;
    public TeamsUpdateRequestBody withPrivacy(TeamsUpdateRequestBodyPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
}