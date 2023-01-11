package openapisdk.models.operations;



public class DeleteLunaClientResponse {
    public Object cloudHsmInternalException;
    public DeleteLunaClientResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public DeleteLunaClientResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public DeleteLunaClientResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteLunaClientResponse deleteLunaClientResponse;
    public DeleteLunaClientResponse withDeleteLunaClientResponse(openapisdk.models.shared.DeleteLunaClientResponse deleteLunaClientResponse) {
        this.deleteLunaClientResponse = deleteLunaClientResponse;
        return this;
    }
    public Object invalidRequestException;
    public DeleteLunaClientResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteLunaClientResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}