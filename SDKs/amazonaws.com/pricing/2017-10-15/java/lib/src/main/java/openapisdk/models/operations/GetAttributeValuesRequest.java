package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttributeValuesRequest {
    public GetAttributeValuesQueryParams queryParams;
    public GetAttributeValuesRequest withQueryParams(GetAttributeValuesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAttributeValuesHeaders headers;
    public GetAttributeValuesRequest withHeaders(GetAttributeValuesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAttributeValuesRequest request;
    public GetAttributeValuesRequest withRequest(openapisdk.models.shared.GetAttributeValuesRequest request) {
        this.request = request;
        return this;
    }
}