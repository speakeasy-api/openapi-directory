package openapisdk.models.operations;



public class PostDescribePendingMaintenanceActionsResponse {
    public byte[] body;
    public PostDescribePendingMaintenanceActionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribePendingMaintenanceActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribePendingMaintenanceActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}