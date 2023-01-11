package openapisdk.models.operations;



public class CreateClusterResponse {
    public Object cloudHsmAccessDeniedException;
    public CreateClusterResponse withCloudHsmAccessDeniedException(Object cloudHsmAccessDeniedException) {
        this.cloudHsmAccessDeniedException = cloudHsmAccessDeniedException;
        return this;
    }
    public Object cloudHsmInternalFailureException;
    public CreateClusterResponse withCloudHsmInternalFailureException(Object cloudHsmInternalFailureException) {
        this.cloudHsmInternalFailureException = cloudHsmInternalFailureException;
        return this;
    }
    public Object cloudHsmInvalidRequestException;
    public CreateClusterResponse withCloudHsmInvalidRequestException(Object cloudHsmInvalidRequestException) {
        this.cloudHsmInvalidRequestException = cloudHsmInvalidRequestException;
        return this;
    }
    public Object cloudHsmResourceNotFoundException;
    public CreateClusterResponse withCloudHsmResourceNotFoundException(Object cloudHsmResourceNotFoundException) {
        this.cloudHsmResourceNotFoundException = cloudHsmResourceNotFoundException;
        return this;
    }
    public Object cloudHsmServiceException;
    public CreateClusterResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public Object cloudHsmTagException;
    public CreateClusterResponse withCloudHsmTagException(Object cloudHsmTagException) {
        this.cloudHsmTagException = cloudHsmTagException;
        return this;
    }
    public String contentType;
    public CreateClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateClusterResponse createClusterResponse;
    public CreateClusterResponse withCreateClusterResponse(openapisdk.models.shared.CreateClusterResponse createClusterResponse) {
        this.createClusterResponse = createClusterResponse;
        return this;
    }
    public Long statusCode;
    public CreateClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}