package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAlarmRequest {
    public DeleteAlarmHeaders headers;
    public DeleteAlarmRequest withHeaders(DeleteAlarmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAlarmRequest request;
    public DeleteAlarmRequest withRequest(openapisdk.models.shared.DeleteAlarmRequest request) {
        this.request = request;
        return this;
    }
}