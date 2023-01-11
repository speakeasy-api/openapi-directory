package openapisdk.models.operations;



public class InitializeClusterResponse {
    public Object cloudHsmAccessDeniedException;
    public InitializeClusterResponse withCloudHsmAccessDeniedException(Object cloudHsmAccessDeniedException) {
        this.cloudHsmAccessDeniedException = cloudHsmAccessDeniedException;
        return this;
    }
    public Object cloudHsmInternalFailureException;
    public InitializeClusterResponse withCloudHsmInternalFailureException(Object cloudHsmInternalFailureException) {
        this.cloudHsmInternalFailureException = cloudHsmInternalFailureException;
        return this;
    }
    public Object cloudHsmInvalidRequestException;
    public InitializeClusterResponse withCloudHsmInvalidRequestException(Object cloudHsmInvalidRequestException) {
        this.cloudHsmInvalidRequestException = cloudHsmInvalidRequestException;
        return this;
    }
    public Object cloudHsmResourceNotFoundException;
    public InitializeClusterResponse withCloudHsmResourceNotFoundException(Object cloudHsmResourceNotFoundException) {
        this.cloudHsmResourceNotFoundException = cloudHsmResourceNotFoundException;
        return this;
    }
    public Object cloudHsmServiceException;
    public InitializeClusterResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public InitializeClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InitializeClusterResponse initializeClusterResponse;
    public InitializeClusterResponse withInitializeClusterResponse(openapisdk.models.shared.InitializeClusterResponse initializeClusterResponse) {
        this.initializeClusterResponse = initializeClusterResponse;
        return this;
    }
    public Long statusCode;
    public InitializeClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}