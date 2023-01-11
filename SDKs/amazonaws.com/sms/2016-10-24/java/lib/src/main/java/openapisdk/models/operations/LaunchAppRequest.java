package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LaunchAppRequest {
    public LaunchAppHeaders headers;
    public LaunchAppRequest withHeaders(LaunchAppHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LaunchAppRequest request;
    public LaunchAppRequest withRequest(openapisdk.models.shared.LaunchAppRequest request) {
        this.request = request;
        return this;
    }
}