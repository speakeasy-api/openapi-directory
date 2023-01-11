package openapisdk.models.operations;



public class GetSyncJobsResponse {
    public String contentType;
    public GetSyncJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSyncJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncJobEntity[] syncJobEntities;
    public GetSyncJobsResponse withSyncJobEntities(openapisdk.models.shared.SyncJobEntity[] syncJobEntities) {
        this.syncJobEntities = syncJobEntities;
        return this;
    }
}