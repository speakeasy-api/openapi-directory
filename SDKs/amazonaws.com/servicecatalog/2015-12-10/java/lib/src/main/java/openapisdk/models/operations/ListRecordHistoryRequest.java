package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecordHistoryRequest {
    public ListRecordHistoryHeaders headers;
    public ListRecordHistoryRequest withHeaders(ListRecordHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRecordHistoryInput request;
    public ListRecordHistoryRequest withRequest(openapisdk.models.shared.ListRecordHistoryInput request) {
        this.request = request;
        return this;
    }
}