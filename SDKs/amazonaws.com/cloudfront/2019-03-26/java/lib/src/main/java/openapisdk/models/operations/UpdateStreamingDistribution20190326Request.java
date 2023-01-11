package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStreamingDistribution20190326Request {
    public UpdateStreamingDistribution20190326PathParams pathParams;
    public UpdateStreamingDistribution20190326Request withPathParams(UpdateStreamingDistribution20190326PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateStreamingDistribution20190326Headers headers;
    public UpdateStreamingDistribution20190326Request withHeaders(UpdateStreamingDistribution20190326Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateStreamingDistribution20190326Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}