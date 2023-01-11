package openapisdk.models.operations;



public class GetSiteUsageResponse {
    public String contentType;
    public GetSiteUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSiteUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UsageSnapshotEntity usageSnapshotEntity;
    public GetSiteUsageResponse withUsageSnapshotEntity(openapisdk.models.shared.UsageSnapshotEntity usageSnapshotEntity) {
        this.usageSnapshotEntity = usageSnapshotEntity;
        return this;
    }
}