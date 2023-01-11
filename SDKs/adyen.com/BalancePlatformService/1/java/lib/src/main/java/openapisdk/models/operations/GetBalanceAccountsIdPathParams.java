package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBalanceAccountsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetBalanceAccountsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}