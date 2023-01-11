package openapisdk.models.operations;



public class ListInferenceSchedulersResponse {
    public Object accessDeniedException;
    public ListInferenceSchedulersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListInferenceSchedulersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListInferenceSchedulersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListInferenceSchedulersResponse listInferenceSchedulersResponse;
    public ListInferenceSchedulersResponse withListInferenceSchedulersResponse(openapisdk.models.shared.ListInferenceSchedulersResponse listInferenceSchedulersResponse) {
        this.listInferenceSchedulersResponse = listInferenceSchedulersResponse;
        return this;
    }
    public Long statusCode;
    public ListInferenceSchedulersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListInferenceSchedulersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListInferenceSchedulersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}