package openapisdk.models.operations;



public class StartBulkDeploymentResponse {
    public Object badRequestException;
    public StartBulkDeploymentResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public StartBulkDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.StartBulkDeploymentResponse startBulkDeploymentResponse;
    public StartBulkDeploymentResponse withStartBulkDeploymentResponse(openapisdk.models.shared.StartBulkDeploymentResponse startBulkDeploymentResponse) {
        this.startBulkDeploymentResponse = startBulkDeploymentResponse;
        return this;
    }
    public Long statusCode;
    public StartBulkDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}