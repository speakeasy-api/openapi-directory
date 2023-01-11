package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateCommitStatusRequest {
    public ReposCreateCommitStatusPathParams pathParams;
    public ReposCreateCommitStatusRequest withPathParams(ReposCreateCommitStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposCreateCommitStatusRequestBody request;
    public ReposCreateCommitStatusRequest withRequest(ReposCreateCommitStatusRequestBody request) {
        this.request = request;
        return this;
    }
}