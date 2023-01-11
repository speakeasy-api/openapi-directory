package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContainerServiceDeploymentsRequest {
    public GetContainerServiceDeploymentsHeaders headers;
    public GetContainerServiceDeploymentsRequest withHeaders(GetContainerServiceDeploymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetContainerServiceDeploymentsRequest request;
    public GetContainerServiceDeploymentsRequest withRequest(openapisdk.models.shared.GetContainerServiceDeploymentsRequest request) {
        this.request = request;
        return this;
    }
}