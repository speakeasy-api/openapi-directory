package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProvisioningArtifactsRequest {
    public ListProvisioningArtifactsHeaders headers;
    public ListProvisioningArtifactsRequest withHeaders(ListProvisioningArtifactsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListProvisioningArtifactsInput request;
    public ListProvisioningArtifactsRequest withRequest(openapisdk.models.shared.ListProvisioningArtifactsInput request) {
        this.request = request;
        return this;
    }
}