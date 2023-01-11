package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatabaseClusterRequest {
    public UpdateDatabaseClusterPathParams pathParams;
    public UpdateDatabaseClusterRequest withPathParams(UpdateDatabaseClusterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDatabaseClusterRequestBody request;
    public UpdateDatabaseClusterRequest withRequest(UpdateDatabaseClusterRequestBody request) {
        this.request = request;
        return this;
    }
}