package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprocessingUnrotateAdvancedRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PreprocessingUnrotateAdvancedRequestBody request;
    public PreprocessingUnrotateAdvancedRequest withRequest(PreprocessingUnrotateAdvancedRequestBody request) {
        this.request = request;
        return this;
    }
    public PreprocessingUnrotateAdvancedSecurity security;
    public PreprocessingUnrotateAdvancedRequest withSecurity(PreprocessingUnrotateAdvancedSecurity security) {
        this.security = security;
        return this;
    }
}