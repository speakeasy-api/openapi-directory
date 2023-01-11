package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReposUpdateBranchProtectionRequestBodyRestrictions
 * Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
**/
public class ReposUpdateBranchProtectionRequestBodyRestrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apps")
    public String[] apps;
    public ReposUpdateBranchProtectionRequestBodyRestrictions withApps(String[] apps) {
        this.apps = apps;
        return this;
    }
    @JsonProperty("teams")
    public String[] teams;
    public ReposUpdateBranchProtectionRequestBodyRestrictions withTeams(String[] teams) {
        this.teams = teams;
        return this;
    }
    @JsonProperty("users")
    public String[] users;
    public ReposUpdateBranchProtectionRequestBodyRestrictions withUsers(String[] users) {
        this.users = users;
        return this;
    }
}