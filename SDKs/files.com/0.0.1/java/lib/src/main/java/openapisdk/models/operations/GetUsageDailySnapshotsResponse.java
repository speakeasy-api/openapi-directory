package openapisdk.models.operations;



public class GetUsageDailySnapshotsResponse {
    public String contentType;
    public GetUsageDailySnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsageDailySnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UsageDailySnapshotEntity[] usageDailySnapshotEntities;
    public GetUsageDailySnapshotsResponse withUsageDailySnapshotEntities(openapisdk.models.shared.UsageDailySnapshotEntity[] usageDailySnapshotEntities) {
        this.usageDailySnapshotEntities = usageDailySnapshotEntities;
        return this;
    }
}