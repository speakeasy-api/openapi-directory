package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClearMerchantOrderInfoListV3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=testMode")
    public Boolean testMode;
    public ClearMerchantOrderInfoListV3QueryParams withTestMode(Boolean testMode) {
        this.testMode = testMode;
        return this;
    }
}