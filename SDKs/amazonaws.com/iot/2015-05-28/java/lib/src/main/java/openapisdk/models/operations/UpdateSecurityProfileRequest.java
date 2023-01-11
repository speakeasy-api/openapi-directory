package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSecurityProfileRequest {
    public UpdateSecurityProfilePathParams pathParams;
    public UpdateSecurityProfileRequest withPathParams(UpdateSecurityProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSecurityProfileQueryParams queryParams;
    public UpdateSecurityProfileRequest withQueryParams(UpdateSecurityProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateSecurityProfileHeaders headers;
    public UpdateSecurityProfileRequest withHeaders(UpdateSecurityProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSecurityProfileRequestBody request;
    public UpdateSecurityProfileRequest withRequest(UpdateSecurityProfileRequestBody request) {
        this.request = request;
        return this;
    }
}