package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemsBatchBankTransferPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batchUuid")
    public String batchUuid;
    public GetItemsBatchBankTransferPathParams withBatchUuid(String batchUuid) {
        this.batchUuid = batchUuid;
        return this;
    }
}