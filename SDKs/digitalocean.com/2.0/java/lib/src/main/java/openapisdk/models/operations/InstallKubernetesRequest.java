package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstallKubernetesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public InstallKubernetesRequestBody request;
    public InstallKubernetesRequest withRequest(InstallKubernetesRequestBody request) {
        this.request = request;
        return this;
    }
}