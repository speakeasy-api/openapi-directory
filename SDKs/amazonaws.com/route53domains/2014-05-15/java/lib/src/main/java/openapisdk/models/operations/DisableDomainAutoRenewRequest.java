package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableDomainAutoRenewRequest {
    public DisableDomainAutoRenewHeaders headers;
    public DisableDomainAutoRenewRequest withHeaders(DisableDomainAutoRenewHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableDomainAutoRenewRequest request;
    public DisableDomainAutoRenewRequest withRequest(openapisdk.models.shared.DisableDomainAutoRenewRequest request) {
        this.request = request;
        return this;
    }
}