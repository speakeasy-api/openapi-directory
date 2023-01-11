package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateOrUpdateEnvironmentRequest {
    public ReposCreateOrUpdateEnvironmentPathParams pathParams;
    public ReposCreateOrUpdateEnvironmentRequest withPathParams(ReposCreateOrUpdateEnvironmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposCreateOrUpdateEnvironmentRequestBody request;
    public ReposCreateOrUpdateEnvironmentRequest withRequest(ReposCreateOrUpdateEnvironmentRequestBody request) {
        this.request = request;
        return this;
    }
}