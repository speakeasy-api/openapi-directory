package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainContactPrivacyRequest {
    public UpdateDomainContactPrivacyHeaders headers;
    public UpdateDomainContactPrivacyRequest withHeaders(UpdateDomainContactPrivacyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDomainContactPrivacyRequest request;
    public UpdateDomainContactPrivacyRequest withRequest(openapisdk.models.shared.UpdateDomainContactPrivacyRequest request) {
        this.request = request;
        return this;
    }
}