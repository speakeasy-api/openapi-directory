package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStreamingDistribution20171030Request {
    public UpdateStreamingDistribution20171030PathParams pathParams;
    public UpdateStreamingDistribution20171030Request withPathParams(UpdateStreamingDistribution20171030PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateStreamingDistribution20171030Headers headers;
    public UpdateStreamingDistribution20171030Request withHeaders(UpdateStreamingDistribution20171030Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateStreamingDistribution20171030Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}