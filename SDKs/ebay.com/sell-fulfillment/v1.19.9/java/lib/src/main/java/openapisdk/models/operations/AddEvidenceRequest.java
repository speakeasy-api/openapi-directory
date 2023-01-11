package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddEvidenceRequest {
    public String serverURL;
    public AddEvidenceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public AddEvidencePathParams pathParams;
    public AddEvidenceRequest withPathParams(AddEvidencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddEvidencePaymentDisputeRequest request;
    public AddEvidenceRequest withRequest(openapisdk.models.shared.AddEvidencePaymentDisputeRequest request) {
        this.request = request;
        return this;
    }
    public AddEvidenceSecurity security;
    public AddEvidenceRequest withSecurity(AddEvidenceSecurity security) {
        this.security = security;
        return this;
    }
}