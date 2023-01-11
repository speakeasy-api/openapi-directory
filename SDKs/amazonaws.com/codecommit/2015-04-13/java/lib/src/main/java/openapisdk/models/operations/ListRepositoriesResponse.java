package openapisdk.models.operations;



public class ListRepositoriesResponse {
    public String contentType;
    public ListRepositoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidContinuationTokenException;
    public ListRepositoriesResponse withInvalidContinuationTokenException(Object invalidContinuationTokenException) {
        this.invalidContinuationTokenException = invalidContinuationTokenException;
        return this;
    }
    public Object invalidOrderException;
    public ListRepositoriesResponse withInvalidOrderException(Object invalidOrderException) {
        this.invalidOrderException = invalidOrderException;
        return this;
    }
    public Object invalidSortByException;
    public ListRepositoriesResponse withInvalidSortByException(Object invalidSortByException) {
        this.invalidSortByException = invalidSortByException;
        return this;
    }
    public openapisdk.models.shared.ListRepositoriesOutput listRepositoriesOutput;
    public ListRepositoriesResponse withListRepositoriesOutput(openapisdk.models.shared.ListRepositoriesOutput listRepositoriesOutput) {
        this.listRepositoriesOutput = listRepositoriesOutput;
        return this;
    }
    public Long statusCode;
    public ListRepositoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}