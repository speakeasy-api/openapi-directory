package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyInstanceCreditSpecificationRequest {
    public PostModifyInstanceCreditSpecificationQueryParams queryParams;
    public PostModifyInstanceCreditSpecificationRequest withQueryParams(PostModifyInstanceCreditSpecificationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyInstanceCreditSpecificationHeaders headers;
    public PostModifyInstanceCreditSpecificationRequest withHeaders(PostModifyInstanceCreditSpecificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyInstanceCreditSpecificationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}