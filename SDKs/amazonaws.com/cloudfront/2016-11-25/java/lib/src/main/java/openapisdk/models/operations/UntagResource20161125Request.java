package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResource20161125Request {
    public UntagResource20161125QueryParams queryParams;
    public UntagResource20161125Request withQueryParams(UntagResource20161125QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UntagResource20161125Headers headers;
    public UntagResource20161125Request withHeaders(UntagResource20161125Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UntagResource20161125Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}