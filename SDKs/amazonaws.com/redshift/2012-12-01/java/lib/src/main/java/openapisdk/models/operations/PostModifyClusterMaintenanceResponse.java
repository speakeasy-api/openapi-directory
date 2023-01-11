package openapisdk.models.operations;



public class PostModifyClusterMaintenanceResponse {
    public byte[] body;
    public PostModifyClusterMaintenanceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyClusterMaintenanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyClusterMaintenanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}