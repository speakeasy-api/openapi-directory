package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFunction20200531Request {
    public UpdateFunction20200531PathParams pathParams;
    public UpdateFunction20200531Request withPathParams(UpdateFunction20200531PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFunction20200531Headers headers;
    public UpdateFunction20200531Request withHeaders(UpdateFunction20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public UpdateFunction20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}