package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsSearchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProjectsSearch request;
    public ProjectsSearchRequest withRequest(openapisdk.models.shared.ProjectsSearch request) {
        this.request = request;
        return this;
    }
}