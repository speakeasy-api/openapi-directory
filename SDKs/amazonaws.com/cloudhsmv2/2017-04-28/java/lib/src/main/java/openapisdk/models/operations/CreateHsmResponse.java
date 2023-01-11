package openapisdk.models.operations;



public class CreateHsmResponse {
    public Object cloudHsmAccessDeniedException;
    public CreateHsmResponse withCloudHsmAccessDeniedException(Object cloudHsmAccessDeniedException) {
        this.cloudHsmAccessDeniedException = cloudHsmAccessDeniedException;
        return this;
    }
    public Object cloudHsmInternalFailureException;
    public CreateHsmResponse withCloudHsmInternalFailureException(Object cloudHsmInternalFailureException) {
        this.cloudHsmInternalFailureException = cloudHsmInternalFailureException;
        return this;
    }
    public Object cloudHsmInvalidRequestException;
    public CreateHsmResponse withCloudHsmInvalidRequestException(Object cloudHsmInvalidRequestException) {
        this.cloudHsmInvalidRequestException = cloudHsmInvalidRequestException;
        return this;
    }
    public Object cloudHsmResourceNotFoundException;
    public CreateHsmResponse withCloudHsmResourceNotFoundException(Object cloudHsmResourceNotFoundException) {
        this.cloudHsmResourceNotFoundException = cloudHsmResourceNotFoundException;
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
    public Long statusCode;
    public CreateHsmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}