package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDistribution20180618Request {
    public UpdateDistribution20180618PathParams pathParams;
    public UpdateDistribution20180618Request withPathParams(UpdateDistribution20180618PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDistribution20180618Headers headers;
    public UpdateDistribution20180618Request withHeaders(UpdateDistribution20180618Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateDistribution20180618Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}