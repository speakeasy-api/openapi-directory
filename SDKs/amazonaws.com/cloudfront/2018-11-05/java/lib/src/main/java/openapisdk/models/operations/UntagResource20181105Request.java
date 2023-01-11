package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResource20181105Request {
    public UntagResource20181105QueryParams queryParams;
    public UntagResource20181105Request withQueryParams(UntagResource20181105QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UntagResource20181105Headers headers;
    public UntagResource20181105Request withHeaders(UntagResource20181105Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UntagResource20181105Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}