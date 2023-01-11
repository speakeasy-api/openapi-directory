package openapisdk.models.operations;



public class DeleteNamespaceResponse {
    public String contentType;
    public DeleteNamespaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteNamespaceResponse deleteNamespaceResponse;
    public DeleteNamespaceResponse withDeleteNamespaceResponse(openapisdk.models.shared.DeleteNamespaceResponse deleteNamespaceResponse) {
        this.deleteNamespaceResponse = deleteNamespaceResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteNamespaceResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Long statusCode;
    public DeleteNamespaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteNamespaceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}