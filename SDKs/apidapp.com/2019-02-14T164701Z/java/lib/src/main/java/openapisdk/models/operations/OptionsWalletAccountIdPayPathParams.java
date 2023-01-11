package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptionsWalletAccountIdPayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OptionsWalletAccountIdPayPathParams withId(String id) {
        this.id = id;
        return this;
    }
}