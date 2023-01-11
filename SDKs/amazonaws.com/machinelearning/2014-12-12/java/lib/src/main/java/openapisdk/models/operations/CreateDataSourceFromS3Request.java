package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDataSourceFromS3Request {
    public CreateDataSourceFromS3Headers headers;
    public CreateDataSourceFromS3Request withHeaders(CreateDataSourceFromS3Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDataSourceFromS3Input request;
    public CreateDataSourceFromS3Request withRequest(openapisdk.models.shared.CreateDataSourceFromS3Input request) {
        this.request = request;
        return this;
    }
}