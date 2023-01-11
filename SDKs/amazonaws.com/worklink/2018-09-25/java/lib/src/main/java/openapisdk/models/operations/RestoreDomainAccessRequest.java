package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RestoreDomainAccessRequest {
    public RestoreDomainAccessHeaders headers;
    public RestoreDomainAccessRequest withHeaders(RestoreDomainAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RestoreDomainAccessRequestBody request;
    public RestoreDomainAccessRequest withRequest(RestoreDomainAccessRequestBody request) {
        this.request = request;
        return this;
    }
}