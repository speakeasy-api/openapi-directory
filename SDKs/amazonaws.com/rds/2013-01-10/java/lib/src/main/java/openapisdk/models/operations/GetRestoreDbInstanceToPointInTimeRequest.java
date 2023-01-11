package openapisdk.models.operations;



public class GetRestoreDbInstanceToPointInTimeRequest {
    public GetRestoreDbInstanceToPointInTimeQueryParams queryParams;
    public GetRestoreDbInstanceToPointInTimeRequest withQueryParams(GetRestoreDbInstanceToPointInTimeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRestoreDbInstanceToPointInTimeHeaders headers;
    public GetRestoreDbInstanceToPointInTimeRequest withHeaders(GetRestoreDbInstanceToPointInTimeHeaders headers) {
        this.headers = headers;
        return this;
    }
}