package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstitutionHrfeedUploadRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public InstitutionHrfeedUploadRequestBody request;
    public InstitutionHrfeedUploadRequest withRequest(InstitutionHrfeedUploadRequestBody request) {
        this.request = request;
        return this;
    }
    public InstitutionHrfeedUploadSecurity security;
    public InstitutionHrfeedUploadRequest withSecurity(InstitutionHrfeedUploadSecurity security) {
        this.security = security;
        return this;
    }
}