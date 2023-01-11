package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectsSearchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProjectsSearch request;
    public PrivateProjectsSearchRequest withRequest(openapisdk.models.shared.ProjectsSearch request) {
        this.request = request;
        return this;
    }
}