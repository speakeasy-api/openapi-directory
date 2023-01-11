package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainMetadataRequest {
    public UpdateDomainMetadataHeaders headers;
    public UpdateDomainMetadataRequest withHeaders(UpdateDomainMetadataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDomainMetadataRequestBody request;
    public UpdateDomainMetadataRequest withRequest(UpdateDomainMetadataRequestBody request) {
        this.request = request;
        return this;
    }
}