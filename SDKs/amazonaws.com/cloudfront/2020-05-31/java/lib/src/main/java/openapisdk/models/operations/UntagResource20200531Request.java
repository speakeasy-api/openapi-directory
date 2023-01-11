package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResource20200531Request {
    public UntagResource20200531QueryParams queryParams;
    public UntagResource20200531Request withQueryParams(UntagResource20200531QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UntagResource20200531Headers headers;
    public UntagResource20200531Request withHeaders(UntagResource20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UntagResource20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}