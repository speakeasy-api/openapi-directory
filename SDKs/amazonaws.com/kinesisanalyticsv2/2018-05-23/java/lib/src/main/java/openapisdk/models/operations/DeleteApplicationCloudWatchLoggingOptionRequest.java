package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApplicationCloudWatchLoggingOptionRequest {
    public DeleteApplicationCloudWatchLoggingOptionHeaders headers;
    public DeleteApplicationCloudWatchLoggingOptionRequest withHeaders(DeleteApplicationCloudWatchLoggingOptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteApplicationCloudWatchLoggingOptionRequest request;
    public DeleteApplicationCloudWatchLoggingOptionRequest withRequest(openapisdk.models.shared.DeleteApplicationCloudWatchLoggingOptionRequest request) {
        this.request = request;
        return this;
    }
}