package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTranscriptRequest {
    public GetTranscriptQueryParams queryParams;
    public GetTranscriptRequest withQueryParams(GetTranscriptQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTranscriptHeaders headers;
    public GetTranscriptRequest withHeaders(GetTranscriptHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetTranscriptRequestBody request;
    public GetTranscriptRequest withRequest(GetTranscriptRequestBody request) {
        this.request = request;
        return this;
    }
}