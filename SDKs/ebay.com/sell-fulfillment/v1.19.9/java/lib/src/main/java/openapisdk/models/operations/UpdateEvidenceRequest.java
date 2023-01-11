package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEvidenceRequest {
    public String serverURL;
    public UpdateEvidenceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateEvidencePathParams pathParams;
    public UpdateEvidenceRequest withPathParams(UpdateEvidencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateEvidencePaymentDisputeRequest request;
    public UpdateEvidenceRequest withRequest(openapisdk.models.shared.UpdateEvidencePaymentDisputeRequest request) {
        this.request = request;
        return this;
    }
    public UpdateEvidenceSecurity security;
    public UpdateEvidenceRequest withSecurity(UpdateEvidenceSecurity security) {
        this.security = security;
        return this;
    }
}