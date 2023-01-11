package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateOrUpdateFileContentsRequest {
    public ReposCreateOrUpdateFileContentsPathParams pathParams;
    public ReposCreateOrUpdateFileContentsRequest withPathParams(ReposCreateOrUpdateFileContentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposCreateOrUpdateFileContentsRequestBody request;
    public ReposCreateOrUpdateFileContentsRequest withRequest(ReposCreateOrUpdateFileContentsRequestBody request) {
        this.request = request;
        return this;
    }
}