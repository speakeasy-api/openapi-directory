package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptionsWalletAccountIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OptionsWalletAccountIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}