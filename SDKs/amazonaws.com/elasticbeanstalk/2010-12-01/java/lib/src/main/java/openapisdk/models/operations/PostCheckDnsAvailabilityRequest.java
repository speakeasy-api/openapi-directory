package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCheckDnsAvailabilityRequest {
    public PostCheckDnsAvailabilityQueryParams queryParams;
    public PostCheckDnsAvailabilityRequest withQueryParams(PostCheckDnsAvailabilityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCheckDnsAvailabilityHeaders headers;
    public PostCheckDnsAvailabilityRequest withHeaders(PostCheckDnsAvailabilityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCheckDnsAvailabilityRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}