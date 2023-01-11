package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWalletAccountIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetWalletAccountIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}