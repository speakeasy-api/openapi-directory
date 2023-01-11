package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTableRequest {
    public CreateTableHeaders headers;
    public CreateTableRequest withHeaders(CreateTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTableInput request;
    public CreateTableRequest withRequest(openapisdk.models.shared.CreateTableInput request) {
        this.request = request;
        return this;
    }
}