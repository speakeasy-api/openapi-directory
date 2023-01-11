package openapisdk.models.operations;



public class ListDeploymentsResponse {
    public Object badRequestException;
    public ListDeploymentsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListDeploymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDeploymentsResponse listDeploymentsResponse;
    public ListDeploymentsResponse withListDeploymentsResponse(openapisdk.models.shared.ListDeploymentsResponse listDeploymentsResponse) {
        this.listDeploymentsResponse = listDeploymentsResponse;
        return this;
    }
    public Long statusCode;
    public ListDeploymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}