package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTaskRequest {
    public CreateTaskQueryParams queryParams;
    public CreateTaskRequest withQueryParams(CreateTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateTaskRequestBodyInput request;
    public CreateTaskRequest withRequest(CreateTaskRequestBodyInput request) {
        this.request = request;
        return this;
    }
}