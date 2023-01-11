package openapisdk.models.operations;



public class DescribeSolutionVersionResponse {
    public String contentType;
    public DescribeSolutionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSolutionVersionResponse describeSolutionVersionResponse;
    public DescribeSolutionVersionResponse withDescribeSolutionVersionResponse(openapisdk.models.shared.DescribeSolutionVersionResponse describeSolutionVersionResponse) {
        this.describeSolutionVersionResponse = describeSolutionVersionResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeSolutionVersionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSolutionVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeSolutionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}