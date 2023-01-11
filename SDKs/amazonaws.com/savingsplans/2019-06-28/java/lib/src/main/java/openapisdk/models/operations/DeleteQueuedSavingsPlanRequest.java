package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteQueuedSavingsPlanRequest {
    public DeleteQueuedSavingsPlanHeaders headers;
    public DeleteQueuedSavingsPlanRequest withHeaders(DeleteQueuedSavingsPlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteQueuedSavingsPlanRequestBody request;
    public DeleteQueuedSavingsPlanRequest withRequest(DeleteQueuedSavingsPlanRequestBody request) {
        this.request = request;
        return this;
    }
}