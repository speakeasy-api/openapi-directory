package openapisdk.models.operations;



public class ListProjectAssetsResponse {
    public String contentType;
    public ListProjectAssetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListProjectAssetsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListProjectAssetsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListProjectAssetsResponse listProjectAssetsResponse;
    public ListProjectAssetsResponse withListProjectAssetsResponse(openapisdk.models.shared.ListProjectAssetsResponse listProjectAssetsResponse) {
        this.listProjectAssetsResponse = listProjectAssetsResponse;
        return this;
    }
    public Long statusCode;
    public ListProjectAssetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListProjectAssetsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}