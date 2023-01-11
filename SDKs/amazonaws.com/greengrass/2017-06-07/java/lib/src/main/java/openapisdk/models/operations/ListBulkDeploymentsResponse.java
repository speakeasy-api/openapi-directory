package openapisdk.models.operations;



public class ListBulkDeploymentsResponse {
    public Object badRequestException;
    public ListBulkDeploymentsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListBulkDeploymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBulkDeploymentsResponse listBulkDeploymentsResponse;
    public ListBulkDeploymentsResponse withListBulkDeploymentsResponse(openapisdk.models.shared.ListBulkDeploymentsResponse listBulkDeploymentsResponse) {
        this.listBulkDeploymentsResponse = listBulkDeploymentsResponse;
        return this;
    }
    public Long statusCode;
    public ListBulkDeploymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}