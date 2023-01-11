package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResource20180618Request {
    public TagResource20180618QueryParams queryParams;
    public TagResource20180618Request withQueryParams(TagResource20180618QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TagResource20180618Headers headers;
    public TagResource20180618Request withHeaders(TagResource20180618Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public TagResource20180618Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}