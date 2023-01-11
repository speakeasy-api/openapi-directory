package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDistribution20200531Request {
    public UpdateDistribution20200531PathParams pathParams;
    public UpdateDistribution20200531Request withPathParams(UpdateDistribution20200531PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDistribution20200531Headers headers;
    public UpdateDistribution20200531Request withHeaders(UpdateDistribution20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateDistribution20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}