package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainSuggestionsRequest {
    public GetDomainSuggestionsHeaders headers;
    public GetDomainSuggestionsRequest withHeaders(GetDomainSuggestionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDomainSuggestionsRequest request;
    public GetDomainSuggestionsRequest withRequest(openapisdk.models.shared.GetDomainSuggestionsRequest request) {
        this.request = request;
        return this;
    }
}