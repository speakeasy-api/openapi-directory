package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeFpgaImagesRequest {
    public PostDescribeFpgaImagesQueryParams queryParams;
    public PostDescribeFpgaImagesRequest withQueryParams(PostDescribeFpgaImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeFpgaImagesHeaders headers;
    public PostDescribeFpgaImagesRequest withHeaders(PostDescribeFpgaImagesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeFpgaImagesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}