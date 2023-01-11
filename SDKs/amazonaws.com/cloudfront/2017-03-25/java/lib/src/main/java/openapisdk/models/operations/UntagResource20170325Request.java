package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResource20170325Request {
    public UntagResource20170325QueryParams queryParams;
    public UntagResource20170325Request withQueryParams(UntagResource20170325QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UntagResource20170325Headers headers;
    public UntagResource20170325Request withHeaders(UntagResource20170325Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UntagResource20170325Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}