package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProvisionedCapacityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public ListProvisionedCapacityPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}