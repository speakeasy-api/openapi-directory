package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDomainMetadataRequest {
    public PostDomainMetadataQueryParams queryParams;
    public PostDomainMetadataRequest withQueryParams(PostDomainMetadataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDomainMetadataRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}