package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAttributeGroupRequest {
    public CreateAttributeGroupHeaders headers;
    public CreateAttributeGroupRequest withHeaders(CreateAttributeGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAttributeGroupRequestBody request;
    public CreateAttributeGroupRequest withRequest(CreateAttributeGroupRequestBody request) {
        this.request = request;
        return this;
    }
}