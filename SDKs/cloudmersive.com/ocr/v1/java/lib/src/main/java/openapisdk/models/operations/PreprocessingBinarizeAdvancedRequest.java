package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprocessingBinarizeAdvancedRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PreprocessingBinarizeAdvancedRequestBody request;
    public PreprocessingBinarizeAdvancedRequest withRequest(PreprocessingBinarizeAdvancedRequestBody request) {
        this.request = request;
        return this;
    }
    public PreprocessingBinarizeAdvancedSecurity security;
    public PreprocessingBinarizeAdvancedRequest withSecurity(PreprocessingBinarizeAdvancedSecurity security) {
        this.security = security;
        return this;
    }
}