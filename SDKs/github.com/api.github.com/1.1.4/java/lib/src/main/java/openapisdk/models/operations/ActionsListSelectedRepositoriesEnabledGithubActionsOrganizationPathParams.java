package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}