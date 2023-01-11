package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAppsListRequest {
    public DeleteAppsListHeaders headers;
    public DeleteAppsListRequest withHeaders(DeleteAppsListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAppsListRequest request;
    public DeleteAppsListRequest withRequest(openapisdk.models.shared.DeleteAppsListRequest request) {
        this.request = request;
        return this;
    }
}