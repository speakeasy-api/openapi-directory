package openapisdk.models.operations;



public class GetChangeLogsResponse {
    public Object accessDeniedException;
    public GetChangeLogsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetChangeLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetChangeLogsResponse getChangeLogsResponse;
    public GetChangeLogsResponse withGetChangeLogsResponse(openapisdk.models.shared.GetChangeLogsResponse getChangeLogsResponse) {
        this.getChangeLogsResponse = getChangeLogsResponse;
        return this;
    }
    public Object internalServerException;
    public GetChangeLogsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetChangeLogsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetChangeLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetChangeLogsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}