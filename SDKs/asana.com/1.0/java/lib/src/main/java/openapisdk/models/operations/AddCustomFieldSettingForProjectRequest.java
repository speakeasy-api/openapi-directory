package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddCustomFieldSettingForProjectRequest {
    public AddCustomFieldSettingForProjectPathParams pathParams;
    public AddCustomFieldSettingForProjectRequest withPathParams(AddCustomFieldSettingForProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddCustomFieldSettingForProjectQueryParams queryParams;
    public AddCustomFieldSettingForProjectRequest withQueryParams(AddCustomFieldSettingForProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddCustomFieldSettingForProjectRequestBody request;
    public AddCustomFieldSettingForProjectRequest withRequest(AddCustomFieldSettingForProjectRequestBody request) {
        this.request = request;
        return this;
    }
}