package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsListRunnerApplicationsForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsListRunnerApplicationsForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}