package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelBatchPaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batchUuid")
    public String batchUuid;
    public CancelBatchPaymentPathParams withBatchUuid(String batchUuid) {
        this.batchUuid = batchUuid;
        return this;
    }
}