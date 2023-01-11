package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnumOptionRequest {
    public UpdateEnumOptionPathParams pathParams;
    public UpdateEnumOptionRequest withPathParams(UpdateEnumOptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateEnumOptionQueryParams queryParams;
    public UpdateEnumOptionRequest withQueryParams(UpdateEnumOptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateEnumOptionRequestBodyInput request;
    public UpdateEnumOptionRequest withRequest(UpdateEnumOptionRequestBodyInput request) {
        this.request = request;
        return this;
    }
}