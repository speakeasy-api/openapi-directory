package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprocessingUnskewRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PreprocessingUnskewRequestBody request;
    public PreprocessingUnskewRequest withRequest(PreprocessingUnskewRequestBody request) {
        this.request = request;
        return this;
    }
    public PreprocessingUnskewSecurity security;
    public PreprocessingUnskewRequest withSecurity(PreprocessingUnskewSecurity security) {
        this.security = security;
        return this;
    }
}