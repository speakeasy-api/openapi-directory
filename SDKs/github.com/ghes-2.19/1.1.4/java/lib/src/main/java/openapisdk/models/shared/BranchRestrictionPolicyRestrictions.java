package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BranchRestrictionPolicyRestrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apps")
    public BranchRestrictionPolicyRestrictionsApps[] apps;
    public BranchRestrictionPolicyRestrictions withApps(BranchRestrictionPolicyRestrictionsApps[] apps) {
        this.apps = apps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apps_url")
    public String appsUrl;
    public BranchRestrictionPolicyRestrictions withAppsUrl(String appsUrl) {
        this.appsUrl = appsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teams")
    public BranchRestrictionPolicyRestrictionsTeams[] teams;
    public BranchRestrictionPolicyRestrictions withTeams(BranchRestrictionPolicyRestrictionsTeams[] teams) {
        this.teams = teams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teams_url")
    public String teamsUrl;
    public BranchRestrictionPolicyRestrictions withTeamsUrl(String teamsUrl) {
        this.teamsUrl = teamsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public BranchRestrictionPolicyRestrictions withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public BranchRestrictionPolicyRestrictionsUsers[] users;
    public BranchRestrictionPolicyRestrictions withUsers(BranchRestrictionPolicyRestrictionsUsers[] users) {
        this.users = users;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users_url")
    public String usersUrl;
    public BranchRestrictionPolicyRestrictions withUsersUrl(String usersUrl) {
        this.usersUrl = usersUrl;
        return this;
    }
}