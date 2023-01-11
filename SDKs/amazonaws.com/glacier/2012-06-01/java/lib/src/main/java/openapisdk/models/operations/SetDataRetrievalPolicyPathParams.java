package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetDataRetrievalPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public SetDataRetrievalPolicyPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}