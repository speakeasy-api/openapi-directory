package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetDefaultCreditSpecificationRequest {
    public PostGetDefaultCreditSpecificationQueryParams queryParams;
    public PostGetDefaultCreditSpecificationRequest withQueryParams(PostGetDefaultCreditSpecificationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetDefaultCreditSpecificationHeaders headers;
    public PostGetDefaultCreditSpecificationRequest withHeaders(PostGetDefaultCreditSpecificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetDefaultCreditSpecificationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}