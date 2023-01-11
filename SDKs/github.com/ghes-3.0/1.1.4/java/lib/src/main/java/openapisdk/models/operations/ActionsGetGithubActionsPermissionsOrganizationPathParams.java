package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsGetGithubActionsPermissionsOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsGetGithubActionsPermissionsOrganizationPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}