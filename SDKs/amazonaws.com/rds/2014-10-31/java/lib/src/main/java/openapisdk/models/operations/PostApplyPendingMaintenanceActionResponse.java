package openapisdk.models.operations;



public class PostApplyPendingMaintenanceActionResponse {
    public byte[] body;
    public PostApplyPendingMaintenanceActionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostApplyPendingMaintenanceActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostApplyPendingMaintenanceActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}