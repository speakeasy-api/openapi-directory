package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeploymentTargetsRequest {
    public ListDeploymentTargetsHeaders headers;
    public ListDeploymentTargetsRequest withHeaders(ListDeploymentTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDeploymentTargetsInput request;
    public ListDeploymentTargetsRequest withRequest(openapisdk.models.shared.ListDeploymentTargetsInput request) {
        this.request = request;
        return this;
    }
}