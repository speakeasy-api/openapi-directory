package openapisdk.models.operations;



public class DescribePredictorResponse {
    public String contentType;
    public DescribePredictorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePredictorResponse describePredictorResponse;
    public DescribePredictorResponse withDescribePredictorResponse(openapisdk.models.shared.DescribePredictorResponse describePredictorResponse) {
        this.describePredictorResponse = describePredictorResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribePredictorResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribePredictorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePredictorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}