package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListofApproversForBatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batchUuid")
    public String batchUuid;
    public GetListofApproversForBatchPathParams withBatchUuid(String batchUuid) {
        this.batchUuid = batchUuid;
        return this;
    }
}