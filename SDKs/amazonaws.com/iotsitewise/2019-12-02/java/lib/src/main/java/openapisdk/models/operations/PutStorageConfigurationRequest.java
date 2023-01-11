package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutStorageConfigurationRequest {
    public PutStorageConfigurationHeaders headers;
    public PutStorageConfigurationRequest withHeaders(PutStorageConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutStorageConfigurationRequestBody request;
    public PutStorageConfigurationRequest withRequest(PutStorageConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}