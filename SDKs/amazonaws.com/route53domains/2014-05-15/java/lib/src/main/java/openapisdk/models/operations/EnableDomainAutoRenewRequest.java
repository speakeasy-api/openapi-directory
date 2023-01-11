package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableDomainAutoRenewRequest {
    public EnableDomainAutoRenewHeaders headers;
    public EnableDomainAutoRenewRequest withHeaders(EnableDomainAutoRenewHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableDomainAutoRenewRequest request;
    public EnableDomainAutoRenewRequest withRequest(openapisdk.models.shared.EnableDomainAutoRenewRequest request) {
        this.request = request;
        return this;
    }
}