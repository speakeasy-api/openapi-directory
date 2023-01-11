package openapisdk.models.operations;



public class DescribeProblemObservationsResponse {
    public String contentType;
    public DescribeProblemObservationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProblemObservationsResponse describeProblemObservationsResponse;
    public DescribeProblemObservationsResponse withDescribeProblemObservationsResponse(openapisdk.models.shared.DescribeProblemObservationsResponse describeProblemObservationsResponse) {
        this.describeProblemObservationsResponse = describeProblemObservationsResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeProblemObservationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProblemObservationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProblemObservationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeProblemObservationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}