package openapisdk.models.operations;



public class ListBulkDeploymentDetailedReportsResponse {
    public Object badRequestException;
    public ListBulkDeploymentDetailedReportsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListBulkDeploymentDetailedReportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBulkDeploymentDetailedReportsResponse listBulkDeploymentDetailedReportsResponse;
    public ListBulkDeploymentDetailedReportsResponse withListBulkDeploymentDetailedReportsResponse(openapisdk.models.shared.ListBulkDeploymentDetailedReportsResponse listBulkDeploymentDetailedReportsResponse) {
        this.listBulkDeploymentDetailedReportsResponse = listBulkDeploymentDetailedReportsResponse;
        return this;
    }
    public Long statusCode;
    public ListBulkDeploymentDetailedReportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}