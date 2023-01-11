package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeprecateDomainRequest {
    public DeprecateDomainHeaders headers;
    public DeprecateDomainRequest withHeaders(DeprecateDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeprecateDomainInput request;
    public DeprecateDomainRequest withRequest(openapisdk.models.shared.DeprecateDomainInput request) {
        this.request = request;
        return this;
    }
}