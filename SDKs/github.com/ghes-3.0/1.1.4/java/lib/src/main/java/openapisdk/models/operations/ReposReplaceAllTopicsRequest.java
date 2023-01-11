package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposReplaceAllTopicsRequest {
    public ReposReplaceAllTopicsPathParams pathParams;
    public ReposReplaceAllTopicsRequest withPathParams(ReposReplaceAllTopicsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposReplaceAllTopicsRequestBody request;
    public ReposReplaceAllTopicsRequest withRequest(ReposReplaceAllTopicsRequestBody request) {
        this.request = request;
        return this;
    }
}