package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStreamingDistribution20200531Request {
    public UpdateStreamingDistribution20200531PathParams pathParams;
    public UpdateStreamingDistribution20200531Request withPathParams(UpdateStreamingDistribution20200531PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateStreamingDistribution20200531Headers headers;
    public UpdateStreamingDistribution20200531Request withHeaders(UpdateStreamingDistribution20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateStreamingDistribution20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}