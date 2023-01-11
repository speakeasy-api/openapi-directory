package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CountPendingActivityTasksRequest {
    public CountPendingActivityTasksHeaders headers;
    public CountPendingActivityTasksRequest withHeaders(CountPendingActivityTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CountPendingActivityTasksInput request;
    public CountPendingActivityTasksRequest withRequest(openapisdk.models.shared.CountPendingActivityTasksInput request) {
        this.request = request;
        return this;
    }
}