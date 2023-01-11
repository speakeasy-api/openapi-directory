package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDefaultCreditSpecificationRequest {
    public PostModifyDefaultCreditSpecificationQueryParams queryParams;
    public PostModifyDefaultCreditSpecificationRequest withQueryParams(PostModifyDefaultCreditSpecificationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyDefaultCreditSpecificationHeaders headers;
    public PostModifyDefaultCreditSpecificationRequest withHeaders(PostModifyDefaultCreditSpecificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyDefaultCreditSpecificationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}