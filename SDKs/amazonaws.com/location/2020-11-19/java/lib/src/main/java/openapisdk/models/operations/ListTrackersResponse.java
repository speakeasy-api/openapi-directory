package openapisdk.models.operations;



public class ListTrackersResponse {
    public Object accessDeniedException;
    public ListTrackersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListTrackersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListTrackersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListTrackersResponse listTrackersResponse;
    public ListTrackersResponse withListTrackersResponse(openapisdk.models.shared.ListTrackersResponse listTrackersResponse) {
        this.listTrackersResponse = listTrackersResponse;
        return this;
    }
    public Long statusCode;
    public ListTrackersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListTrackersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListTrackersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}