package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagKeysRequest {
    public GetTagKeysQueryParams queryParams;
    public GetTagKeysRequest withQueryParams(GetTagKeysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTagKeysHeaders headers;
    public GetTagKeysRequest withHeaders(GetTagKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTagKeysInput request;
    public GetTagKeysRequest withRequest(openapisdk.models.shared.GetTagKeysInput request) {
        this.request = request;
        return this;
    }
}