package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnumOptionForCustomFieldRequest {
    public CreateEnumOptionForCustomFieldPathParams pathParams;
    public CreateEnumOptionForCustomFieldRequest withPathParams(CreateEnumOptionForCustomFieldPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateEnumOptionForCustomFieldQueryParams queryParams;
    public CreateEnumOptionForCustomFieldRequest withQueryParams(CreateEnumOptionForCustomFieldQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateEnumOptionForCustomFieldRequestBodyInput request;
    public CreateEnumOptionForCustomFieldRequest withRequest(CreateEnumOptionForCustomFieldRequestBodyInput request) {
        this.request = request;
        return this;
    }
}