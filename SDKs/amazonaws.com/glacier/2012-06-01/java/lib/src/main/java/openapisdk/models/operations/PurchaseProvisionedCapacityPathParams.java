package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PurchaseProvisionedCapacityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public PurchaseProvisionedCapacityPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}