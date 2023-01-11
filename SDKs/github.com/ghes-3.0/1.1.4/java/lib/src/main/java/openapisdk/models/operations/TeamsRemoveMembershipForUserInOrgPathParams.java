package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsRemoveMembershipForUserInOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public TeamsRemoveMembershipForUserInOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_slug")
    public String teamSlug;
    public TeamsRemoveMembershipForUserInOrgPathParams withTeamSlug(String teamSlug) {
        this.teamSlug = teamSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public TeamsRemoveMembershipForUserInOrgPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}