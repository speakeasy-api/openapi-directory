package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InteractionsGetRestrictionsForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public InteractionsGetRestrictionsForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}