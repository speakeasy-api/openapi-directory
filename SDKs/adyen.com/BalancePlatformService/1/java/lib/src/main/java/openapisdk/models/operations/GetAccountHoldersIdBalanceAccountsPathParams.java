package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountHoldersIdBalanceAccountsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetAccountHoldersIdBalanceAccountsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}