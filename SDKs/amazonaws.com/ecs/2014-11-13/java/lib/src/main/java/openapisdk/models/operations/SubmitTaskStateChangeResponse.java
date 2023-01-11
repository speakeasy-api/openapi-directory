package openapisdk.models.operations;



public class SubmitTaskStateChangeResponse {
    public Object accessDeniedException;
    public SubmitTaskStateChangeResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public SubmitTaskStateChangeResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public SubmitTaskStateChangeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public SubmitTaskStateChangeResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public SubmitTaskStateChangeResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public SubmitTaskStateChangeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubmitTaskStateChangeResponse submitTaskStateChangeResponse;
    public SubmitTaskStateChangeResponse withSubmitTaskStateChangeResponse(openapisdk.models.shared.SubmitTaskStateChangeResponse submitTaskStateChangeResponse) {
        this.submitTaskStateChangeResponse = submitTaskStateChangeResponse;
        return this;
    }
}