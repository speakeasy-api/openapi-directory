package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResource20180618Request {
    public UntagResource20180618QueryParams queryParams;
    public UntagResource20180618Request withQueryParams(UntagResource20180618QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UntagResource20180618Headers headers;
    public UntagResource20180618Request withHeaders(UntagResource20180618Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UntagResource20180618Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}