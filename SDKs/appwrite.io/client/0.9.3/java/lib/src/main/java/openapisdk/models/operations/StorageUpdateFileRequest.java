package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageUpdateFileRequest {
    public StorageUpdateFilePathParams pathParams;
    public StorageUpdateFileRequest withPathParams(StorageUpdateFilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StorageUpdateFileRequestBody request;
    public StorageUpdateFileRequest withRequest(StorageUpdateFileRequestBody request) {
        this.request = request;
        return this;
    }
    public StorageUpdateFileSecurity security;
    public StorageUpdateFileRequest withSecurity(StorageUpdateFileSecurity security) {
        this.security = security;
        return this;
    }
}