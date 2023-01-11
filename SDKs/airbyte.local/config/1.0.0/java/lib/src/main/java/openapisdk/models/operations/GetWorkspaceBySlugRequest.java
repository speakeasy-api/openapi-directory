package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspaceBySlugRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SlugRequestBody request;
    public GetWorkspaceBySlugRequest withRequest(openapisdk.models.shared.SlugRequestBody request) {
        this.request = request;
        return this;
    }
}