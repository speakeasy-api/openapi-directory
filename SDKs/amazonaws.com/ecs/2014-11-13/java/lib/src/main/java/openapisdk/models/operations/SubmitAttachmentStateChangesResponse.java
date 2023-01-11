package openapisdk.models.operations;



public class SubmitAttachmentStateChangesResponse {
    public Object accessDeniedException;
    public SubmitAttachmentStateChangesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public SubmitAttachmentStateChangesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public SubmitAttachmentStateChangesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public SubmitAttachmentStateChangesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public SubmitAttachmentStateChangesResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public SubmitAttachmentStateChangesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubmitAttachmentStateChangesResponse submitAttachmentStateChangesResponse;
    public SubmitAttachmentStateChangesResponse withSubmitAttachmentStateChangesResponse(openapisdk.models.shared.SubmitAttachmentStateChangesResponse submitAttachmentStateChangesResponse) {
        this.submitAttachmentStateChangesResponse = submitAttachmentStateChangesResponse;
        return this;
    }
}