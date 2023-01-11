package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartBgpFailoverTestRequest {
    public StartBgpFailoverTestHeaders headers;
    public StartBgpFailoverTestRequest withHeaders(StartBgpFailoverTestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartBgpFailoverTestRequest request;
    public StartBgpFailoverTestRequest withRequest(openapisdk.models.shared.StartBgpFailoverTestRequest request) {
        this.request = request;
        return this;
    }
}