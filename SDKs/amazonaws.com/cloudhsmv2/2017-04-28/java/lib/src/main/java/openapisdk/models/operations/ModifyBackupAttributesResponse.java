package openapisdk.models.operations;



public class ModifyBackupAttributesResponse {
    public Object cloudHsmAccessDeniedException;
    public ModifyBackupAttributesResponse withCloudHsmAccessDeniedException(Object cloudHsmAccessDeniedException) {
        this.cloudHsmAccessDeniedException = cloudHsmAccessDeniedException;
        return this;
    }
    public Object cloudHsmInternalFailureException;
    public ModifyBackupAttributesResponse withCloudHsmInternalFailureException(Object cloudHsmInternalFailureException) {
        this.cloudHsmInternalFailureException = cloudHsmInternalFailureException;
        return this;
    }
    public Object cloudHsmInvalidRequestException;
    public ModifyBackupAttributesResponse withCloudHsmInvalidRequestException(Object cloudHsmInvalidRequestException) {
        this.cloudHsmInvalidRequestException = cloudHsmInvalidRequestException;
        return this;
    }
    public Object cloudHsmResourceNotFoundException;
    public ModifyBackupAttributesResponse withCloudHsmResourceNotFoundException(Object cloudHsmResourceNotFoundException) {
        this.cloudHsmResourceNotFoundException = cloudHsmResourceNotFoundException;
        return this;
    }
    public Object cloudHsmServiceException;
    public ModifyBackupAttributesResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public ModifyBackupAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ModifyBackupAttributesResponse modifyBackupAttributesResponse;
    public ModifyBackupAttributesResponse withModifyBackupAttributesResponse(openapisdk.models.shared.ModifyBackupAttributesResponse modifyBackupAttributesResponse) {
        this.modifyBackupAttributesResponse = modifyBackupAttributesResponse;
        return this;
    }
    public Long statusCode;
    public ModifyBackupAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}