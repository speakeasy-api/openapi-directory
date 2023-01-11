package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountHoldersIdBalanceAccountsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetAccountHoldersIdBalanceAccountsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetAccountHoldersIdBalanceAccountsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
}