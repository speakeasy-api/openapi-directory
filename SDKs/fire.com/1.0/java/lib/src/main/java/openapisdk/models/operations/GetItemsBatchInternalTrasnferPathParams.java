package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemsBatchInternalTrasnferPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batchUuid")
    public String batchUuid;
    public GetItemsBatchInternalTrasnferPathParams withBatchUuid(String batchUuid) {
        this.batchUuid = batchUuid;
        return this;
    }
}