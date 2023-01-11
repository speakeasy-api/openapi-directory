package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainContactRequest {
    public UpdateDomainContactHeaders headers;
    public UpdateDomainContactRequest withHeaders(UpdateDomainContactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDomainContactRequest request;
    public UpdateDomainContactRequest withRequest(openapisdk.models.shared.UpdateDomainContactRequest request) {
        this.request = request;
        return this;
    }
}