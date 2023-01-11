package openapisdk.models.operations;



public class CopyBackupToRegionResponse {
    public Object cloudHsmAccessDeniedException;
    public CopyBackupToRegionResponse withCloudHsmAccessDeniedException(Object cloudHsmAccessDeniedException) {
        this.cloudHsmAccessDeniedException = cloudHsmAccessDeniedException;
        return this;
    }
    public Object cloudHsmInternalFailureException;
    public CopyBackupToRegionResponse withCloudHsmInternalFailureException(Object cloudHsmInternalFailureException) {
        this.cloudHsmInternalFailureException = cloudHsmInternalFailureException;
        return this;
    }
    public Object cloudHsmInvalidRequestException;
    public CopyBackupToRegionResponse withCloudHsmInvalidRequestException(Object cloudHsmInvalidRequestException) {
        this.cloudHsmInvalidRequestException = cloudHsmInvalidRequestException;
        return this;
    }
    public Object cloudHsmResourceNotFoundException;
    public CopyBackupToRegionResponse withCloudHsmResourceNotFoundException(Object cloudHsmResourceNotFoundException) {
        this.cloudHsmResourceNotFoundException = cloudHsmResourceNotFoundException;
        return this;
    }
    public Object cloudHsmServiceException;
    public CopyBackupToRegionResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public Object cloudHsmTagException;
    public CopyBackupToRegionResponse withCloudHsmTagException(Object cloudHsmTagException) {
        this.cloudHsmTagException = cloudHsmTagException;
        return this;
    }
    public String contentType;
    public CopyBackupToRegionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CopyBackupToRegionResponse copyBackupToRegionResponse;
    public CopyBackupToRegionResponse withCopyBackupToRegionResponse(openapisdk.models.shared.CopyBackupToRegionResponse copyBackupToRegionResponse) {
        this.copyBackupToRegionResponse = copyBackupToRegionResponse;
        return this;
    }
    public Long statusCode;
    public CopyBackupToRegionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}