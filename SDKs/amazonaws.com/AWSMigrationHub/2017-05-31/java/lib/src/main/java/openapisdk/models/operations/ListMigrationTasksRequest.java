package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMigrationTasksRequest {
    public ListMigrationTasksQueryParams queryParams;
    public ListMigrationTasksRequest withQueryParams(ListMigrationTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMigrationTasksHeaders headers;
    public ListMigrationTasksRequest withHeaders(ListMigrationTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListMigrationTasksRequest request;
    public ListMigrationTasksRequest withRequest(openapisdk.models.shared.ListMigrationTasksRequest request) {
        this.request = request;
        return this;
    }
}