package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetMerchantOrderInfoListV3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=testMode")
    public Boolean testMode;
    public SetMerchantOrderInfoListV3QueryParams withTestMode(Boolean testMode) {
        this.testMode = testMode;
        return this;
    }
}