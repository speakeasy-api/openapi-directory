package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInternalTransferBatchPaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batchUuid")
    public String batchUuid;
    public DeleteInternalTransferBatchPaymentPathParams withBatchUuid(String batchUuid) {
        this.batchUuid = batchUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itemUuid")
    public String itemUuid;
    public DeleteInternalTransferBatchPaymentPathParams withItemUuid(String itemUuid) {
        this.itemUuid = itemUuid;
        return this;
    }
}