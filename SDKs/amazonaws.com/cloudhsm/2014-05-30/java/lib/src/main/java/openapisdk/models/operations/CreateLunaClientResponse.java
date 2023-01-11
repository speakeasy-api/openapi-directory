package openapisdk.models.operations;



public class CreateLunaClientResponse {
    public Object cloudHsmInternalException;
    public CreateLunaClientResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public CreateLunaClientResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public CreateLunaClientResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLunaClientResponse createLunaClientResponse;
    public CreateLunaClientResponse withCreateLunaClientResponse(openapisdk.models.shared.CreateLunaClientResponse createLunaClientResponse) {
        this.createLunaClientResponse = createLunaClientResponse;
        return this;
    }
    public Object invalidRequestException;
    public CreateLunaClientResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateLunaClientResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}