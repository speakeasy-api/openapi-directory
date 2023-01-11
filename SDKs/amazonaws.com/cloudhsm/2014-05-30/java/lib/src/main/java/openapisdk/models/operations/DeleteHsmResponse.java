package openapisdk.models.operations;



public class DeleteHsmResponse {
    public Object cloudHsmInternalException;
    public DeleteHsmResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public DeleteHsmResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public DeleteHsmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteHsmResponse deleteHsmResponse;
    public DeleteHsmResponse withDeleteHsmResponse(openapisdk.models.shared.DeleteHsmResponse deleteHsmResponse) {
        this.deleteHsmResponse = deleteHsmResponse;
        return this;
    }
    public Object invalidRequestException;
    public DeleteHsmResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteHsmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}