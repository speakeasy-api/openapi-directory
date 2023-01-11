package openapisdk.models.operations;



public class DeleteBackupResponse {
    public Object cloudHsmAccessDeniedException;
    public DeleteBackupResponse withCloudHsmAccessDeniedException(Object cloudHsmAccessDeniedException) {
        this.cloudHsmAccessDeniedException = cloudHsmAccessDeniedException;
        return this;
    }
    public Object cloudHsmInternalFailureException;
    public DeleteBackupResponse withCloudHsmInternalFailureException(Object cloudHsmInternalFailureException) {
        this.cloudHsmInternalFailureException = cloudHsmInternalFailureException;
        return this;
    }
    public Object cloudHsmInvalidRequestException;
    public DeleteBackupResponse withCloudHsmInvalidRequestException(Object cloudHsmInvalidRequestException) {
        this.cloudHsmInvalidRequestException = cloudHsmInvalidRequestException;
        return this;
    }
    public Object cloudHsmResourceNotFoundException;
    public DeleteBackupResponse withCloudHsmResourceNotFoundException(Object cloudHsmResourceNotFoundException) {
        this.cloudHsmResourceNotFoundException = cloudHsmResourceNotFoundException;
        return this;
    }
    public Object cloudHsmServiceException;
    public DeleteBackupResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public DeleteBackupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBackupResponse deleteBackupResponse;
    public DeleteBackupResponse withDeleteBackupResponse(openapisdk.models.shared.DeleteBackupResponse deleteBackupResponse) {
        this.deleteBackupResponse = deleteBackupResponse;
        return this;
    }
    public Long statusCode;
    public DeleteBackupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}