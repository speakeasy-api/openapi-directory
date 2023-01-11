package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScheduleKeyDeletionRequest {
    public ScheduleKeyDeletionHeaders headers;
    public ScheduleKeyDeletionRequest withHeaders(ScheduleKeyDeletionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScheduleKeyDeletionRequest request;
    public ScheduleKeyDeletionRequest withRequest(openapisdk.models.shared.ScheduleKeyDeletionRequest request) {
        this.request = request;
        return this;
    }
}