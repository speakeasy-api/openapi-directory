package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDataSourceFromRdsRequest {
    public CreateDataSourceFromRdsHeaders headers;
    public CreateDataSourceFromRdsRequest withHeaders(CreateDataSourceFromRdsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDataSourceFromRdsInput request;
    public CreateDataSourceFromRdsRequest withRequest(openapisdk.models.shared.CreateDataSourceFromRdsInput request) {
        this.request = request;
        return this;
    }
}