package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InteractionsRemoveRestrictionsForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public InteractionsRemoveRestrictionsForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}