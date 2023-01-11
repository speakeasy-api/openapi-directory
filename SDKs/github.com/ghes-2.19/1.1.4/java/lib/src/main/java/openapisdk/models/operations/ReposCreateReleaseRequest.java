package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateReleaseRequest {
    public ReposCreateReleasePathParams pathParams;
    public ReposCreateReleaseRequest withPathParams(ReposCreateReleasePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposCreateReleaseRequestBody request;
    public ReposCreateReleaseRequest withRequest(ReposCreateReleaseRequestBody request) {
        this.request = request;
        return this;
    }
}