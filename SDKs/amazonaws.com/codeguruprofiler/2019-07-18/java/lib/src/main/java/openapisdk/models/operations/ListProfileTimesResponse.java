package openapisdk.models.operations;



public class ListProfileTimesResponse {
    public String contentType;
    public ListProfileTimesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListProfileTimesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListProfileTimesResponse listProfileTimesResponse;
    public ListProfileTimesResponse withListProfileTimesResponse(openapisdk.models.shared.ListProfileTimesResponse listProfileTimesResponse) {
        this.listProfileTimesResponse = listProfileTimesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListProfileTimesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListProfileTimesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListProfileTimesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListProfileTimesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}