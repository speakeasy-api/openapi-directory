package openapisdk.models.operations;



public class ListInsightsResponse {
    public Object accessDeniedException;
    public ListInsightsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListInsightsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListInsightsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListInsightsResponse listInsightsResponse;
    public ListInsightsResponse withListInsightsResponse(openapisdk.models.shared.ListInsightsResponse listInsightsResponse) {
        this.listInsightsResponse = listInsightsResponse;
        return this;
    }
    public Long statusCode;
    public ListInsightsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListInsightsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListInsightsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}