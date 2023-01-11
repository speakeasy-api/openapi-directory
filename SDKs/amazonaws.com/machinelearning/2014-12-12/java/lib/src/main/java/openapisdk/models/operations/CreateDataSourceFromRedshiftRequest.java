package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDataSourceFromRedshiftRequest {
    public CreateDataSourceFromRedshiftHeaders headers;
    public CreateDataSourceFromRedshiftRequest withHeaders(CreateDataSourceFromRedshiftHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDataSourceFromRedshiftInput request;
    public CreateDataSourceFromRedshiftRequest withRequest(openapisdk.models.shared.CreateDataSourceFromRedshiftInput request) {
        this.request = request;
        return this;
    }
}