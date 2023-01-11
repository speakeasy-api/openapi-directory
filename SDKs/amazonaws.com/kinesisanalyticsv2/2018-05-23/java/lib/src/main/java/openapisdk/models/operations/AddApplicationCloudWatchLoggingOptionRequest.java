package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddApplicationCloudWatchLoggingOptionRequest {
    public AddApplicationCloudWatchLoggingOptionHeaders headers;
    public AddApplicationCloudWatchLoggingOptionRequest withHeaders(AddApplicationCloudWatchLoggingOptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddApplicationCloudWatchLoggingOptionRequest request;
    public AddApplicationCloudWatchLoggingOptionRequest withRequest(openapisdk.models.shared.AddApplicationCloudWatchLoggingOptionRequest request) {
        this.request = request;
        return this;
    }
}