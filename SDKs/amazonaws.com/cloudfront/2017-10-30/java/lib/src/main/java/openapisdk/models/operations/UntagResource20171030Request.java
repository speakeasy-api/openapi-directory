package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResource20171030Request {
    public UntagResource20171030QueryParams queryParams;
    public UntagResource20171030Request withQueryParams(UntagResource20171030QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UntagResource20171030Headers headers;
    public UntagResource20171030Request withHeaders(UntagResource20171030Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UntagResource20171030Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}