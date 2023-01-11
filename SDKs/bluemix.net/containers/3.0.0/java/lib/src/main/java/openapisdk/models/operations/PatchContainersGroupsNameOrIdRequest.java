package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchContainersGroupsNameOrIdRequest {
    public PatchContainersGroupsNameOrIdPathParams pathParams;
    public PatchContainersGroupsNameOrIdRequest withPathParams(PatchContainersGroupsNameOrIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchContainersGroupsNameOrIdHeaders headers;
    public PatchContainersGroupsNameOrIdRequest withHeaders(PatchContainersGroupsNameOrIdHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PatchContainersGroupsNameOrIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}