package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEffectivePermissionsForPathRequest {
    public GetEffectivePermissionsForPathQueryParams queryParams;
    public GetEffectivePermissionsForPathRequest withQueryParams(GetEffectivePermissionsForPathQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEffectivePermissionsForPathHeaders headers;
    public GetEffectivePermissionsForPathRequest withHeaders(GetEffectivePermissionsForPathHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEffectivePermissionsForPathRequest request;
    public GetEffectivePermissionsForPathRequest withRequest(openapisdk.models.shared.GetEffectivePermissionsForPathRequest request) {
        this.request = request;
        return this;
    }
}