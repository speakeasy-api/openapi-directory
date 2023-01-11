package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingGetSharedStorageBillingGhePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public BillingGetSharedStorageBillingGhePathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
}