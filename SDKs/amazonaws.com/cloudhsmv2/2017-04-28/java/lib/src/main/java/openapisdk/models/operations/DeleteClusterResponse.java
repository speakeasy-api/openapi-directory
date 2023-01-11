package openapisdk.models.operations;



public class DeleteClusterResponse {
    public Object cloudHsmAccessDeniedException;
    public DeleteClusterResponse withCloudHsmAccessDeniedException(Object cloudHsmAccessDeniedException) {
        this.cloudHsmAccessDeniedException = cloudHsmAccessDeniedException;
        return this;
    }
    public Object cloudHsmInternalFailureException;
    public DeleteClusterResponse withCloudHsmInternalFailureException(Object cloudHsmInternalFailureException) {
        this.cloudHsmInternalFailureException = cloudHsmInternalFailureException;
        return this;
    }
    public Object cloudHsmInvalidRequestException;
    public DeleteClusterResponse withCloudHsmInvalidRequestException(Object cloudHsmInvalidRequestException) {
        this.cloudHsmInvalidRequestException = cloudHsmInvalidRequestException;
        return this;
    }
    public Object cloudHsmResourceNotFoundException;
    public DeleteClusterResponse withCloudHsmResourceNotFoundException(Object cloudHsmResourceNotFoundException) {
        this.cloudHsmResourceNotFoundException = cloudHsmResourceNotFoundException;
        return this;
    }
    public Object cloudHsmServiceException;
    public DeleteClusterResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public Object cloudHsmTagException;
    public DeleteClusterResponse withCloudHsmTagException(Object cloudHsmTagException) {
        this.cloudHsmTagException = cloudHsmTagException;
        return this;
    }
    public String contentType;
    public DeleteClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteClusterResponse deleteClusterResponse;
    public DeleteClusterResponse withDeleteClusterResponse(openapisdk.models.shared.DeleteClusterResponse deleteClusterResponse) {
        this.deleteClusterResponse = deleteClusterResponse;
        return this;
    }
    public Long statusCode;
    public DeleteClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}