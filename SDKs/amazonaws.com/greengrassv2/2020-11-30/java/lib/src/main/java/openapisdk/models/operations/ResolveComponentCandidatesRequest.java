package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResolveComponentCandidatesRequest {
    public ResolveComponentCandidatesHeaders headers;
    public ResolveComponentCandidatesRequest withHeaders(ResolveComponentCandidatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ResolveComponentCandidatesRequestBody request;
    public ResolveComponentCandidatesRequest withRequest(ResolveComponentCandidatesRequestBody request) {
        this.request = request;
        return this;
    }
}