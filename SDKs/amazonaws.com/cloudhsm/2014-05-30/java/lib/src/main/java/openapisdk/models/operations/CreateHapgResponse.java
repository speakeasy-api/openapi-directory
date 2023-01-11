package openapisdk.models.operations;



public class CreateHapgResponse {
    public Object cloudHsmInternalException;
    public CreateHapgResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public CreateHapgResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public CreateHapgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateHapgResponse createHapgResponse;
    public CreateHapgResponse withCreateHapgResponse(openapisdk.models.shared.CreateHapgResponse createHapgResponse) {
        this.createHapgResponse = createHapgResponse;
        return this;
    }
    public Object invalidRequestException;
    public CreateHapgResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateHapgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}