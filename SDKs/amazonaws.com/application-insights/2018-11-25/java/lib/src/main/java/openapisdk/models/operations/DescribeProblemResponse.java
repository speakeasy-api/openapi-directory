package openapisdk.models.operations;



public class DescribeProblemResponse {
    public String contentType;
    public DescribeProblemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProblemResponse describeProblemResponse;
    public DescribeProblemResponse withDescribeProblemResponse(openapisdk.models.shared.DescribeProblemResponse describeProblemResponse) {
        this.describeProblemResponse = describeProblemResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeProblemResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProblemResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProblemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeProblemResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}