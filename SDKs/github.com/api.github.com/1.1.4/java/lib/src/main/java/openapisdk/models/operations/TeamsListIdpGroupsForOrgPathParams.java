package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListIdpGroupsForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public TeamsListIdpGroupsForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}