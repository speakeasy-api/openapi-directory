package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingGetSharedStorageBillingOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public BillingGetSharedStorageBillingOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}