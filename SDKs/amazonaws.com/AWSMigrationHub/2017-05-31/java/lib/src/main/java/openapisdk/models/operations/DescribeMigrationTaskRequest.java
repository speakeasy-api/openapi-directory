package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMigrationTaskRequest {
    public DescribeMigrationTaskHeaders headers;
    public DescribeMigrationTaskRequest withHeaders(DescribeMigrationTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeMigrationTaskRequest request;
    public DescribeMigrationTaskRequest withRequest(openapisdk.models.shared.DescribeMigrationTaskRequest request) {
        this.request = request;
        return this;
    }
}