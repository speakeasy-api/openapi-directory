package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestFunction20200531Request {
    public TestFunction20200531PathParams pathParams;
    public TestFunction20200531Request withPathParams(TestFunction20200531PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TestFunction20200531Headers headers;
    public TestFunction20200531Request withHeaders(TestFunction20200531Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public TestFunction20200531Request withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}