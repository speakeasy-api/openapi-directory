package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprocessingBinarizeRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PreprocessingBinarizeRequestBody request;
    public PreprocessingBinarizeRequest withRequest(PreprocessingBinarizeRequestBody request) {
        this.request = request;
        return this;
    }
    public PreprocessingBinarizeSecurity security;
    public PreprocessingBinarizeRequest withSecurity(PreprocessingBinarizeSecurity security) {
        this.security = security;
        return this;
    }
}