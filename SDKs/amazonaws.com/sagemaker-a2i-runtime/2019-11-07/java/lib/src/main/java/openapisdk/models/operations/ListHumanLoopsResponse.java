package openapisdk.models.operations;



public class ListHumanLoopsResponse {
    public String contentType;
    public ListHumanLoopsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListHumanLoopsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListHumanLoopsResponse listHumanLoopsResponse;
    public ListHumanLoopsResponse withListHumanLoopsResponse(openapisdk.models.shared.ListHumanLoopsResponse listHumanLoopsResponse) {
        this.listHumanLoopsResponse = listHumanLoopsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListHumanLoopsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListHumanLoopsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListHumanLoopsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListHumanLoopsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}