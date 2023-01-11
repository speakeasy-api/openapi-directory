package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RevokeDomainAccessRequest {
    public RevokeDomainAccessHeaders headers;
    public RevokeDomainAccessRequest withHeaders(RevokeDomainAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RevokeDomainAccessRequestBody request;
    public RevokeDomainAccessRequest withRequest(RevokeDomainAccessRequestBody request) {
        this.request = request;
        return this;
    }
}