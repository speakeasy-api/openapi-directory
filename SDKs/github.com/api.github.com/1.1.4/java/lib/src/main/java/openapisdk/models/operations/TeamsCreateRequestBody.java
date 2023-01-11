package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsCreateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TeamsCreateRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintainers")
    public String[] maintainers;
    public TeamsCreateRequestBody withMaintainers(String[] maintainers) {
        this.maintainers = maintainers;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public TeamsCreateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_team_id")
    public Long parentTeamId;
    public TeamsCreateRequestBody withParentTeamId(Long parentTeamId) {
        this.parentTeamId = parentTeamId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public TeamsCreateRequestBodyPermissionEnum permission;
    public TeamsCreateRequestBody withPermission(TeamsCreateRequestBodyPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public TeamsCreateRequestBodyPrivacyEnum privacy;
    public TeamsCreateRequestBody withPrivacy(TeamsCreateRequestBodyPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repo_names")
    public String[] repoNames;
    public TeamsCreateRequestBody withRepoNames(String[] repoNames) {
        this.repoNames = repoNames;
        return this;
    }
}