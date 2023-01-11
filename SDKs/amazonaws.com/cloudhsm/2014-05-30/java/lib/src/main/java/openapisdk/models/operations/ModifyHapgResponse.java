package openapisdk.models.operations;



public class ModifyHapgResponse {
    public Object cloudHsmInternalException;
    public ModifyHapgResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public ModifyHapgResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public ModifyHapgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public ModifyHapgResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ModifyHapgResponse modifyHapgResponse;
    public ModifyHapgResponse withModifyHapgResponse(openapisdk.models.shared.ModifyHapgResponse modifyHapgResponse) {
        this.modifyHapgResponse = modifyHapgResponse;
        return this;
    }
    public Long statusCode;
    public ModifyHapgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}