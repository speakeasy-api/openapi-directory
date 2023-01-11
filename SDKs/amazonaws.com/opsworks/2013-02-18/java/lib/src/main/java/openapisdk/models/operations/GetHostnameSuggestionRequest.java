package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHostnameSuggestionRequest {
    public GetHostnameSuggestionHeaders headers;
    public GetHostnameSuggestionRequest withHeaders(GetHostnameSuggestionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetHostnameSuggestionRequest request;
    public GetHostnameSuggestionRequest withRequest(openapisdk.models.shared.GetHostnameSuggestionRequest request) {
        this.request = request;
        return this;
    }
}