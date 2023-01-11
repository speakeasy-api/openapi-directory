package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchBalanceAccountsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchBalanceAccountsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}