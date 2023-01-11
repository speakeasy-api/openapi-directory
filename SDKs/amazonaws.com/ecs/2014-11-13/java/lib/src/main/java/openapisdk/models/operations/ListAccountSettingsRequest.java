package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAccountSettingsRequest {
    public ListAccountSettingsQueryParams queryParams;
    public ListAccountSettingsRequest withQueryParams(ListAccountSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAccountSettingsHeaders headers;
    public ListAccountSettingsRequest withHeaders(ListAccountSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAccountSettingsRequest request;
    public ListAccountSettingsRequest withRequest(openapisdk.models.shared.ListAccountSettingsRequest request) {
        this.request = request;
        return this;
    }
}