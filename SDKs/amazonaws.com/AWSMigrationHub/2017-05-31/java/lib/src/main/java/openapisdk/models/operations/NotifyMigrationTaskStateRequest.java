package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotifyMigrationTaskStateRequest {
    public NotifyMigrationTaskStateHeaders headers;
    public NotifyMigrationTaskStateRequest withHeaders(NotifyMigrationTaskStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NotifyMigrationTaskStateRequest request;
    public NotifyMigrationTaskStateRequest withRequest(openapisdk.models.shared.NotifyMigrationTaskStateRequest request) {
        this.request = request;
        return this;
    }
}