package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSecurityProfileRequest {
    public CreateSecurityProfilePathParams pathParams;
    public CreateSecurityProfileRequest withPathParams(CreateSecurityProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateSecurityProfileHeaders headers;
    public CreateSecurityProfileRequest withHeaders(CreateSecurityProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSecurityProfileRequestBody request;
    public CreateSecurityProfileRequest withRequest(CreateSecurityProfileRequestBody request) {
        this.request = request;
        return this;
    }
}