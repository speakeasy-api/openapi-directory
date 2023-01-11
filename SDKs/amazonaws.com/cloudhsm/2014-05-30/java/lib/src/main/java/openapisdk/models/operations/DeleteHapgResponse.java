package openapisdk.models.operations;



public class DeleteHapgResponse {
    public Object cloudHsmInternalException;
    public DeleteHapgResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public DeleteHapgResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public DeleteHapgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteHapgResponse deleteHapgResponse;
    public DeleteHapgResponse withDeleteHapgResponse(openapisdk.models.shared.DeleteHapgResponse deleteHapgResponse) {
        this.deleteHapgResponse = deleteHapgResponse;
        return this;
    }
    public Object invalidRequestException;
    public DeleteHapgResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteHapgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}