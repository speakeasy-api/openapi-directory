package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProvisioningArtifactsForServiceActionRequest {
    public ListProvisioningArtifactsForServiceActionQueryParams queryParams;
    public ListProvisioningArtifactsForServiceActionRequest withQueryParams(ListProvisioningArtifactsForServiceActionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProvisioningArtifactsForServiceActionHeaders headers;
    public ListProvisioningArtifactsForServiceActionRequest withHeaders(ListProvisioningArtifactsForServiceActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListProvisioningArtifactsForServiceActionInput request;
    public ListProvisioningArtifactsForServiceActionRequest withRequest(openapisdk.models.shared.ListProvisioningArtifactsForServiceActionInput request) {
        this.request = request;
        return this;
    }
}