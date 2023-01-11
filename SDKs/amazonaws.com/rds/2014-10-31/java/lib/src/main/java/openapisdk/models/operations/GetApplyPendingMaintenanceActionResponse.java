package openapisdk.models.operations;



public class GetApplyPendingMaintenanceActionResponse {
    public byte[] body;
    public GetApplyPendingMaintenanceActionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApplyPendingMaintenanceActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApplyPendingMaintenanceActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}