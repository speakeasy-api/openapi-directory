package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGraphqlApiRequest {
    public CreateGraphqlApiHeaders headers;
    public CreateGraphqlApiRequest withHeaders(CreateGraphqlApiHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateGraphqlApiRequestBody request;
    public CreateGraphqlApiRequest withRequest(CreateGraphqlApiRequestBody request) {
        this.request = request;
        return this;
    }
}