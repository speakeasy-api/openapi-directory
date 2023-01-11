package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListProjectsInOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public TeamsListProjectsInOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_slug")
    public String teamSlug;
    public TeamsListProjectsInOrgPathParams withTeamSlug(String teamSlug) {
        this.teamSlug = teamSlug;
        return this;
    }
}