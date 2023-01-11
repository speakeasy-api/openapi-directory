package openapisdk.models.operations;



public class CreateHsmResponse {
    public Object cloudHsmInternalException;
    public CreateHsmResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public CreateHsmResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public CreateHsmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateHsmResponse createHsmResponse;
    public CreateHsmResponse withCreateHsmResponse(openapisdk.models.shared.CreateHsmResponse createHsmResponse) {
        this.createHsmResponse = createHsmResponse;
        return this;
    }
    public Object invalidRequestException;
    public CreateHsmResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateHsmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}