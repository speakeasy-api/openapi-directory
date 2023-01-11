package openapisdk.models.operations;



public class GetBulkDeploymentStatusResponse {
    public Object badRequestException;
    public GetBulkDeploymentStatusResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetBulkDeploymentStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetBulkDeploymentStatusResponse getBulkDeploymentStatusResponse;
    public GetBulkDeploymentStatusResponse withGetBulkDeploymentStatusResponse(openapisdk.models.shared.GetBulkDeploymentStatusResponse getBulkDeploymentStatusResponse) {
        this.getBulkDeploymentStatusResponse = getBulkDeploymentStatusResponse;
        return this;
    }
    public Long statusCode;
    public GetBulkDeploymentStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}