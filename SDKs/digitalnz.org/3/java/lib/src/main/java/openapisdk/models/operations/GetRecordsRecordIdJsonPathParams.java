package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecordsRecordIdJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=record_id")
    public Long recordId;
    public GetRecordsRecordIdJsonPathParams withRecordId(Long recordId) {
        this.recordId = recordId;
        return this;
    }
}