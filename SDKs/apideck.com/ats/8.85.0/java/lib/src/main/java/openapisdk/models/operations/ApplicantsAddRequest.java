package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicantsAddRequest {
    public ApplicantsAddQueryParams queryParams;
    public ApplicantsAddRequest withQueryParams(ApplicantsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApplicantsAddHeaders headers;
    public ApplicantsAddRequest withHeaders(ApplicantsAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplicantInput request;
    public ApplicantsAddRequest withRequest(openapisdk.models.shared.ApplicantInput request) {
        this.request = request;
        return this;
    }
    public ApplicantsAddSecurity security;
    public ApplicantsAddRequest withSecurity(ApplicantsAddSecurity security) {
        this.security = security;
        return this;
    }
}