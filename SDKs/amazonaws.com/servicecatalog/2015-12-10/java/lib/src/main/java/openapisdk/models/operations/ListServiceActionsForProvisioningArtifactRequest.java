package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceActionsForProvisioningArtifactRequest {
    public ListServiceActionsForProvisioningArtifactQueryParams queryParams;
    public ListServiceActionsForProvisioningArtifactRequest withQueryParams(ListServiceActionsForProvisioningArtifactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceActionsForProvisioningArtifactHeaders headers;
    public ListServiceActionsForProvisioningArtifactRequest withHeaders(ListServiceActionsForProvisioningArtifactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListServiceActionsForProvisioningArtifactInput request;
    public ListServiceActionsForProvisioningArtifactRequest withRequest(openapisdk.models.shared.ListServiceActionsForProvisioningArtifactInput request) {
        this.request = request;
        return this;
    }
}