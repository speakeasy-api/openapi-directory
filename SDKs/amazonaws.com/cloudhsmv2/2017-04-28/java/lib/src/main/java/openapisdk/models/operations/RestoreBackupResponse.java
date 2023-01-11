package openapisdk.models.operations;



public class RestoreBackupResponse {
    public Object cloudHsmAccessDeniedException;
    public RestoreBackupResponse withCloudHsmAccessDeniedException(Object cloudHsmAccessDeniedException) {
        this.cloudHsmAccessDeniedException = cloudHsmAccessDeniedException;
        return this;
    }
    public Object cloudHsmInternalFailureException;
    public RestoreBackupResponse withCloudHsmInternalFailureException(Object cloudHsmInternalFailureException) {
        this.cloudHsmInternalFailureException = cloudHsmInternalFailureException;
        return this;
    }
    public Object cloudHsmInvalidRequestException;
    public RestoreBackupResponse withCloudHsmInvalidRequestException(Object cloudHsmInvalidRequestException) {
        this.cloudHsmInvalidRequestException = cloudHsmInvalidRequestException;
        return this;
    }
    public Object cloudHsmResourceNotFoundException;
    public RestoreBackupResponse withCloudHsmResourceNotFoundException(Object cloudHsmResourceNotFoundException) {
        this.cloudHsmResourceNotFoundException = cloudHsmResourceNotFoundException;
        return this;
    }
    public Object cloudHsmServiceException;
    public RestoreBackupResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public RestoreBackupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RestoreBackupResponse restoreBackupResponse;
    public RestoreBackupResponse withRestoreBackupResponse(openapisdk.models.shared.RestoreBackupResponse restoreBackupResponse) {
        this.restoreBackupResponse = restoreBackupResponse;
        return this;
    }
    public Long statusCode;
    public RestoreBackupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}