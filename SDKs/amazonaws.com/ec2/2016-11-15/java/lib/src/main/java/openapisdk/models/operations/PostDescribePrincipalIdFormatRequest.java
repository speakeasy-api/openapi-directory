package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribePrincipalIdFormatRequest {
    public PostDescribePrincipalIdFormatQueryParams queryParams;
    public PostDescribePrincipalIdFormatRequest withQueryParams(PostDescribePrincipalIdFormatQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribePrincipalIdFormatHeaders headers;
    public PostDescribePrincipalIdFormatRequest withHeaders(PostDescribePrincipalIdFormatHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribePrincipalIdFormatRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}