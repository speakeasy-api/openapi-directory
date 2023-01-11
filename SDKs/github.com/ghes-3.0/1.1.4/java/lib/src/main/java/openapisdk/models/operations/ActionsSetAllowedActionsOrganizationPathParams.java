package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsSetAllowedActionsOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsSetAllowedActionsOrganizationPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}