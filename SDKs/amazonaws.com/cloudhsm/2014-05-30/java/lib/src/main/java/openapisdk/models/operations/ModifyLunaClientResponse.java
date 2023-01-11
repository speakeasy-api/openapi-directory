package openapisdk.models.operations;



public class ModifyLunaClientResponse {
    public Object cloudHsmServiceException;
    public ModifyLunaClientResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public ModifyLunaClientResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ModifyLunaClientResponse modifyLunaClientResponse;
    public ModifyLunaClientResponse withModifyLunaClientResponse(openapisdk.models.shared.ModifyLunaClientResponse modifyLunaClientResponse) {
        this.modifyLunaClientResponse = modifyLunaClientResponse;
        return this;
    }
    public Long statusCode;
    public ModifyLunaClientResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}