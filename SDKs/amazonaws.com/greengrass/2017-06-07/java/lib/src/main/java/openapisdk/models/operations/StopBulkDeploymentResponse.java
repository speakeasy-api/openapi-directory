package openapisdk.models.operations;



public class StopBulkDeploymentResponse {
    public Object badRequestException;
    public StopBulkDeploymentResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public StopBulkDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StopBulkDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopBulkDeploymentResponse;
    public StopBulkDeploymentResponse withStopBulkDeploymentResponse(java.util.Map<String, Object> stopBulkDeploymentResponse) {
        this.stopBulkDeploymentResponse = stopBulkDeploymentResponse;
        return this;
    }
}