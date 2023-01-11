package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptionsTransactionHashPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hash")
    public String hash;
    public OptionsTransactionHashPathParams withHash(String hash) {
        this.hash = hash;
        return this;
    }
}