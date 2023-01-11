package openapisdk.models.operations;



public class DescribeSolutionResponse {
    public String contentType;
    public DescribeSolutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSolutionResponse describeSolutionResponse;
    public DescribeSolutionResponse withDescribeSolutionResponse(openapisdk.models.shared.DescribeSolutionResponse describeSolutionResponse) {
        this.describeSolutionResponse = describeSolutionResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeSolutionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSolutionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeSolutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}