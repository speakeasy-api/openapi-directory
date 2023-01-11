package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsCreateRemoveTokenForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsCreateRemoveTokenForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}