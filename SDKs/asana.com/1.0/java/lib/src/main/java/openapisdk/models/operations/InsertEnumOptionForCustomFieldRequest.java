package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InsertEnumOptionForCustomFieldRequest {
    public InsertEnumOptionForCustomFieldPathParams pathParams;
    public InsertEnumOptionForCustomFieldRequest withPathParams(InsertEnumOptionForCustomFieldPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InsertEnumOptionForCustomFieldQueryParams queryParams;
    public InsertEnumOptionForCustomFieldRequest withQueryParams(InsertEnumOptionForCustomFieldQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public InsertEnumOptionForCustomFieldRequestBody request;
    public InsertEnumOptionForCustomFieldRequest withRequest(InsertEnumOptionForCustomFieldRequestBody request) {
        this.request = request;
        return this;
    }
}