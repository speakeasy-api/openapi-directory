package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatabaseClusterSizeRequest {
    public UpdateDatabaseClusterSizePathParams pathParams;
    public UpdateDatabaseClusterSizeRequest withPathParams(UpdateDatabaseClusterSizePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDatabaseClusterSizeRequestBody request;
    public UpdateDatabaseClusterSizeRequest withRequest(UpdateDatabaseClusterSizeRequestBody request) {
        this.request = request;
        return this;
    }
}