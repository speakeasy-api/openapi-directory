package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsUpdateLegacyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TeamsUpdateLegacyRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public TeamsUpdateLegacyRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_team_id")
    public Long parentTeamId;
    public TeamsUpdateLegacyRequestBody withParentTeamId(Long parentTeamId) {
        this.parentTeamId = parentTeamId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public TeamsUpdateLegacyRequestBodyPermissionEnum permission;
    public TeamsUpdateLegacyRequestBody withPermission(TeamsUpdateLegacyRequestBodyPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public TeamsUpdateLegacyRequestBodyPrivacyEnum privacy;
    public TeamsUpdateLegacyRequestBody withPrivacy(TeamsUpdateLegacyRequestBodyPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
}