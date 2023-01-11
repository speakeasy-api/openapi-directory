package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InteractionsSetRestrictionsForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public InteractionsSetRestrictionsForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}