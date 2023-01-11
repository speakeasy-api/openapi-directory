package openapisdk.models.operations;



public class ModifyHsmResponse {
    public Object cloudHsmInternalException;
    public ModifyHsmResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public ModifyHsmResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public ModifyHsmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public ModifyHsmResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ModifyHsmResponse modifyHsmResponse;
    public ModifyHsmResponse withModifyHsmResponse(openapisdk.models.shared.ModifyHsmResponse modifyHsmResponse) {
        this.modifyHsmResponse = modifyHsmResponse;
        return this;
    }
    public Long statusCode;
    public ModifyHsmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}