package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportMigrationTaskRequest {
    public ImportMigrationTaskHeaders headers;
    public ImportMigrationTaskRequest withHeaders(ImportMigrationTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportMigrationTaskRequest request;
    public ImportMigrationTaskRequest withRequest(openapisdk.models.shared.ImportMigrationTaskRequest request) {
        this.request = request;
        return this;
    }
}