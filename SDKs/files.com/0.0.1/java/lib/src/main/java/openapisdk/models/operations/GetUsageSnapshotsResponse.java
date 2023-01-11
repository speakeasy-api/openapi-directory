package openapisdk.models.operations;



public class GetUsageSnapshotsResponse {
    public String contentType;
    public GetUsageSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsageSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UsageSnapshotEntity[] usageSnapshotEntities;
    public GetUsageSnapshotsResponse withUsageSnapshotEntities(openapisdk.models.shared.UsageSnapshotEntity[] usageSnapshotEntities) {
        this.usageSnapshotEntities = usageSnapshotEntities;
        return this;
    }
}