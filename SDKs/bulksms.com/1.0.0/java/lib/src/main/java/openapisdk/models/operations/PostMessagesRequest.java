package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMessagesRequest {
    public PostMessagesQueryParams queryParams;
    public PostMessagesRequest withQueryParams(PostMessagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubmissionEntry[] request;
    public PostMessagesRequest withRequest(openapisdk.models.shared.SubmissionEntry[] request) {
        this.request = request;
        return this;
    }
    public PostMessagesSecurity security;
    public PostMessagesRequest withSecurity(PostMessagesSecurity security) {
        this.security = security;
        return this;
    }
}