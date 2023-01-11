package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVaultsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public ListVaultsPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}