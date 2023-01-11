package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignProjectResourcesRequest {
    public AssignProjectResourcesPathParams pathParams;
    public AssignProjectResourcesRequest withPathParams(AssignProjectResourcesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssignProjectResourcesRequestBody request;
    public AssignProjectResourcesRequest withRequest(AssignProjectResourcesRequestBody request) {
        this.request = request;
        return this;
    }
}