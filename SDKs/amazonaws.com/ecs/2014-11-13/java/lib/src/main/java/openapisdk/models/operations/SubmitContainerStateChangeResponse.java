package openapisdk.models.operations;



public class SubmitContainerStateChangeResponse {
    public Object accessDeniedException;
    public SubmitContainerStateChangeResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public SubmitContainerStateChangeResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public SubmitContainerStateChangeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serverException;
    public SubmitContainerStateChangeResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public SubmitContainerStateChangeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubmitContainerStateChangeResponse submitContainerStateChangeResponse;
    public SubmitContainerStateChangeResponse withSubmitContainerStateChangeResponse(openapisdk.models.shared.SubmitContainerStateChangeResponse submitContainerStateChangeResponse) {
        this.submitContainerStateChangeResponse = submitContainerStateChangeResponse;
        return this;
    }
}