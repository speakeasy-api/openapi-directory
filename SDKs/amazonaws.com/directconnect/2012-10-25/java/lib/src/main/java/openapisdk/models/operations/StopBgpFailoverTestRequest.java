package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopBgpFailoverTestRequest {
    public StopBgpFailoverTestHeaders headers;
    public StopBgpFailoverTestRequest withHeaders(StopBgpFailoverTestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopBgpFailoverTestRequest request;
    public StopBgpFailoverTestRequest withRequest(openapisdk.models.shared.StopBgpFailoverTestRequest request) {
        this.request = request;
        return this;
    }
}