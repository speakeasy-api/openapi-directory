package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContainerServicesRequest {
    public GetContainerServicesHeaders headers;
    public GetContainerServicesRequest withHeaders(GetContainerServicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetContainerServicesRequest request;
    public GetContainerServicesRequest withRequest(openapisdk.models.shared.GetContainerServicesRequest request) {
        this.request = request;
        return this;
    }
}