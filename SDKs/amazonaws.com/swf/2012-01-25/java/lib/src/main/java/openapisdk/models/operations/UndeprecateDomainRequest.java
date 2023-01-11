package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UndeprecateDomainRequest {
    public UndeprecateDomainHeaders headers;
    public UndeprecateDomainRequest withHeaders(UndeprecateDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UndeprecateDomainInput request;
    public UndeprecateDomainRequest withRequest(openapisdk.models.shared.UndeprecateDomainInput request) {
        this.request = request;
        return this;
    }
}