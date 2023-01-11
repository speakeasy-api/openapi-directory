package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableSecurityHubRequest {
    public EnableSecurityHubHeaders headers;
    public EnableSecurityHubRequest withHeaders(EnableSecurityHubHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnableSecurityHubRequestBody request;
    public EnableSecurityHubRequest withRequest(EnableSecurityHubRequestBody request) {
        this.request = request;
        return this;
    }
}