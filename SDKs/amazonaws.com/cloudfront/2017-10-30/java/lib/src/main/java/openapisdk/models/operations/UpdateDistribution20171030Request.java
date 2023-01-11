package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDistribution20171030Request {
    public UpdateDistribution20171030PathParams pathParams;
    public UpdateDistribution20171030Request withPathParams(UpdateDistribution20171030PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDistribution20171030Headers headers;
    public UpdateDistribution20171030Request withHeaders(UpdateDistribution20171030Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateDistribution20171030Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}