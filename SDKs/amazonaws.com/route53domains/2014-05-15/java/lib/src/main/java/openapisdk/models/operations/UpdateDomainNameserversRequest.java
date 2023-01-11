package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainNameserversRequest {
    public UpdateDomainNameserversHeaders headers;
    public UpdateDomainNameserversRequest withHeaders(UpdateDomainNameserversHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDomainNameserversRequest request;
    public UpdateDomainNameserversRequest withRequest(openapisdk.models.shared.UpdateDomainNameserversRequest request) {
        this.request = request;
        return this;
    }
}