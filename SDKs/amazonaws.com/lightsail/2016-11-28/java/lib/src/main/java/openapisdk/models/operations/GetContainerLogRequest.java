package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContainerLogRequest {
    public GetContainerLogHeaders headers;
    public GetContainerLogRequest withHeaders(GetContainerLogHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetContainerLogRequest request;
    public GetContainerLogRequest withRequest(openapisdk.models.shared.GetContainerLogRequest request) {
        this.request = request;
        return this;
    }
}