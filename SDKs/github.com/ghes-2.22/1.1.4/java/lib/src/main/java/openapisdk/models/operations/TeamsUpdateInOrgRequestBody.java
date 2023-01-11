package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsUpdateInOrgRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TeamsUpdateInOrgRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TeamsUpdateInOrgRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_team_id")
    public Long parentTeamId;
    public TeamsUpdateInOrgRequestBody withParentTeamId(Long parentTeamId) {
        this.parentTeamId = parentTeamId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public TeamsUpdateInOrgRequestBodyPermissionEnum permission;
    public TeamsUpdateInOrgRequestBody withPermission(TeamsUpdateInOrgRequestBodyPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public TeamsUpdateInOrgRequestBodyPrivacyEnum privacy;
    public TeamsUpdateInOrgRequestBody withPrivacy(TeamsUpdateInOrgRequestBodyPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
}