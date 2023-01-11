package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeFpgaImageAttributeRequest {
    public PostDescribeFpgaImageAttributeQueryParams queryParams;
    public PostDescribeFpgaImageAttributeRequest withQueryParams(PostDescribeFpgaImageAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeFpgaImageAttributeHeaders headers;
    public PostDescribeFpgaImageAttributeRequest withHeaders(PostDescribeFpgaImageAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeFpgaImageAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}