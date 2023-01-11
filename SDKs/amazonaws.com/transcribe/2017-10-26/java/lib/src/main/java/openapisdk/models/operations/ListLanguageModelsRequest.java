package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLanguageModelsRequest {
    public ListLanguageModelsQueryParams queryParams;
    public ListLanguageModelsRequest withQueryParams(ListLanguageModelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListLanguageModelsHeaders headers;
    public ListLanguageModelsRequest withHeaders(ListLanguageModelsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLanguageModelsRequest request;
    public ListLanguageModelsRequest withRequest(openapisdk.models.shared.ListLanguageModelsRequest request) {
        this.request = request;
        return this;
    }
}