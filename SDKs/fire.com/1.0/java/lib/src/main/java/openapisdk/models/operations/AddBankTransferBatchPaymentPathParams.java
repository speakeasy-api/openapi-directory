package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddBankTransferBatchPaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batchUuid")
    public String batchUuid;
    public AddBankTransferBatchPaymentPathParams withBatchUuid(String batchUuid) {
        this.batchUuid = batchUuid;
        return this;
    }
}