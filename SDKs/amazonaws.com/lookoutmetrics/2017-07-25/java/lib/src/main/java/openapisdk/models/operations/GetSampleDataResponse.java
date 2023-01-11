package openapisdk.models.operations;



public class GetSampleDataResponse {
    public Object accessDeniedException;
    public GetSampleDataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetSampleDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSampleDataResponse getSampleDataResponse;
    public GetSampleDataResponse withGetSampleDataResponse(openapisdk.models.shared.GetSampleDataResponse getSampleDataResponse) {
        this.getSampleDataResponse = getSampleDataResponse;
        return this;
    }
    public Object internalServerException;
    public GetSampleDataResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetSampleDataResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetSampleDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetSampleDataResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public GetSampleDataResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}