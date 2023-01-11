package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnvironmentEc2Request {
    public CreateEnvironmentEc2Headers headers;
    public CreateEnvironmentEc2Request withHeaders(CreateEnvironmentEc2Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEnvironmentEc2Request request;
    public CreateEnvironmentEc2Request withRequest(openapisdk.models.shared.CreateEnvironmentEc2Request request) {
        this.request = request;
        return this;
    }
}