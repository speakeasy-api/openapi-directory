package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBankTransferBatchPaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batchUuid")
    public String batchUuid;
    public DeleteBankTransferBatchPaymentPathParams withBatchUuid(String batchUuid) {
        this.batchUuid = batchUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itemUuid")
    public String itemUuid;
    public DeleteBankTransferBatchPaymentPathParams withItemUuid(String itemUuid) {
        this.itemUuid = itemUuid;
        return this;
    }
}