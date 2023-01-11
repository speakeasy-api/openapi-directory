package openapisdk.models.operations;



public class DeleteContainerResponse {
    public Object containerInUseException;
    public DeleteContainerResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public DeleteContainerResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public DeleteContainerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteContainerOutput;
    public DeleteContainerResponse withDeleteContainerOutput(java.util.Map<String, Object> deleteContainerOutput) {
        this.deleteContainerOutput = deleteContainerOutput;
        return this;
    }
    public Object internalServerError;
    public DeleteContainerResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DeleteContainerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}