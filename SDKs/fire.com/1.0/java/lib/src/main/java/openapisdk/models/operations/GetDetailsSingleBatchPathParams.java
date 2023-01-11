package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetailsSingleBatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batchUuid")
    public String batchUuid;
    public GetDetailsSingleBatchPathParams withBatchUuid(String batchUuid) {
        this.batchUuid = batchUuid;
        return this;
    }
}