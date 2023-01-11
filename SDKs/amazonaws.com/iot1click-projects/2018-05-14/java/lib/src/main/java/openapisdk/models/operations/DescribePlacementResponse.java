package openapisdk.models.operations;



public class DescribePlacementResponse {
    public String contentType;
    public DescribePlacementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePlacementResponse describePlacementResponse;
    public DescribePlacementResponse withDescribePlacementResponse(openapisdk.models.shared.DescribePlacementResponse describePlacementResponse) {
        this.describePlacementResponse = describePlacementResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribePlacementResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribePlacementResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribePlacementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePlacementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}