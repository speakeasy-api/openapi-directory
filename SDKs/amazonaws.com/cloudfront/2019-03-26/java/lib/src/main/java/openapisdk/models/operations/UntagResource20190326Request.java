package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResource20190326Request {
    public UntagResource20190326QueryParams queryParams;
    public UntagResource20190326Request withQueryParams(UntagResource20190326QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UntagResource20190326Headers headers;
    public UntagResource20190326Request withHeaders(UntagResource20190326Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UntagResource20190326Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}