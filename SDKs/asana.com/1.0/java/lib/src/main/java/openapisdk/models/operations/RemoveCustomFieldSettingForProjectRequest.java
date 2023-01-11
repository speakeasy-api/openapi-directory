package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveCustomFieldSettingForProjectRequest {
    public RemoveCustomFieldSettingForProjectPathParams pathParams;
    public RemoveCustomFieldSettingForProjectRequest withPathParams(RemoveCustomFieldSettingForProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveCustomFieldSettingForProjectQueryParams queryParams;
    public RemoveCustomFieldSettingForProjectRequest withQueryParams(RemoveCustomFieldSettingForProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveCustomFieldSettingForProjectRequestBody request;
    public RemoveCustomFieldSettingForProjectRequest withRequest(RemoveCustomFieldSettingForProjectRequestBody request) {
        this.request = request;
        return this;
    }
}