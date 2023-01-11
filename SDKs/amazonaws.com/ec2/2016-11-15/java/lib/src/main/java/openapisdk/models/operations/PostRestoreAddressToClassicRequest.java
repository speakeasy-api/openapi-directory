package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreAddressToClassicRequest {
    public PostRestoreAddressToClassicQueryParams queryParams;
    public PostRestoreAddressToClassicRequest withQueryParams(PostRestoreAddressToClassicQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRestoreAddressToClassicHeaders headers;
    public PostRestoreAddressToClassicRequest withHeaders(PostRestoreAddressToClassicHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRestoreAddressToClassicRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}