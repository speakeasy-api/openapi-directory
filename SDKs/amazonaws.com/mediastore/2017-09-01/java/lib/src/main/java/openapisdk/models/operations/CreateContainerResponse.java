package openapisdk.models.operations;



public class CreateContainerResponse {
    public Object containerInUseException;
    public CreateContainerResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public String contentType;
    public CreateContainerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateContainerOutput createContainerOutput;
    public CreateContainerResponse withCreateContainerOutput(openapisdk.models.shared.CreateContainerOutput createContainerOutput) {
        this.createContainerOutput = createContainerOutput;
        return this;
    }
    public Object internalServerError;
    public CreateContainerResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object limitExceededException;
    public CreateContainerResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateContainerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}