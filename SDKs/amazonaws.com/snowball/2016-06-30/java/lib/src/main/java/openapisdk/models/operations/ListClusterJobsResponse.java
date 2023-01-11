package openapisdk.models.operations;



public class ListClusterJobsResponse {
    public String contentType;
    public ListClusterJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListClusterJobsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidResourceException;
    public ListClusterJobsResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public openapisdk.models.shared.ListClusterJobsResult listClusterJobsResult;
    public ListClusterJobsResponse withListClusterJobsResult(openapisdk.models.shared.ListClusterJobsResult listClusterJobsResult) {
        this.listClusterJobsResult = listClusterJobsResult;
        return this;
    }
    public Long statusCode;
    public ListClusterJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}