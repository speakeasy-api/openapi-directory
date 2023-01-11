package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWalletAccountIdPayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PostWalletAccountIdPayPathParams withId(String id) {
        this.id = id;
        return this;
    }
}