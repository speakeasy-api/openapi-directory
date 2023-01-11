package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResource20181105Request {
    public TagResource20181105QueryParams queryParams;
    public TagResource20181105Request withQueryParams(TagResource20181105QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TagResource20181105Headers headers;
    public TagResource20181105Request withHeaders(TagResource20181105Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public TagResource20181105Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}