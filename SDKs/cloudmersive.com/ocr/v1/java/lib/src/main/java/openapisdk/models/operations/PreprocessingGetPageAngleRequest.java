package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprocessingGetPageAngleRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PreprocessingGetPageAngleRequestBody request;
    public PreprocessingGetPageAngleRequest withRequest(PreprocessingGetPageAngleRequestBody request) {
        this.request = request;
        return this;
    }
    public PreprocessingGetPageAngleSecurity security;
    public PreprocessingGetPageAngleRequest withSecurity(PreprocessingGetPageAngleSecurity security) {
        this.security = security;
        return this;
    }
}