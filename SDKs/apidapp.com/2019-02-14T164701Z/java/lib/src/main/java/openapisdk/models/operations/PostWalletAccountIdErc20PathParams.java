package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWalletAccountIdErc20PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PostWalletAccountIdErc20PathParams withId(String id) {
        this.id = id;
        return this;
    }
}