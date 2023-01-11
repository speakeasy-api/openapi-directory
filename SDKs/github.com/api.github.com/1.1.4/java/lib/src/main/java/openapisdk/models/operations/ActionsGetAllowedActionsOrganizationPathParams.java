package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsGetAllowedActionsOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsGetAllowedActionsOrganizationPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}