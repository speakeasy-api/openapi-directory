package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddInternalTransferBatchPaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batchUuid")
    public String batchUuid;
    public AddInternalTransferBatchPaymentPathParams withBatchUuid(String batchUuid) {
        this.batchUuid = batchUuid;
        return this;
    }
}