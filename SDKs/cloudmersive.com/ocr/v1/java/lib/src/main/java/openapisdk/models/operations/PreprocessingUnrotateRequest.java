package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprocessingUnrotateRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PreprocessingUnrotateRequestBody request;
    public PreprocessingUnrotateRequest withRequest(PreprocessingUnrotateRequestBody request) {
        this.request = request;
        return this;
    }
    public PreprocessingUnrotateSecurity security;
    public PreprocessingUnrotateRequest withSecurity(PreprocessingUnrotateSecurity security) {
        this.security = security;
        return this;
    }
}