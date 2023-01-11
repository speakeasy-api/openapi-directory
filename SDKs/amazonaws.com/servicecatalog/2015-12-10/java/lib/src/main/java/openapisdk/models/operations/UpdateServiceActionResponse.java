package openapisdk.models.operations;



public class UpdateServiceActionResponse {
    public String contentType;
    public UpdateServiceActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public UpdateServiceActionResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateServiceActionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateServiceActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateServiceActionOutput updateServiceActionOutput;
    public UpdateServiceActionResponse withUpdateServiceActionOutput(openapisdk.models.shared.UpdateServiceActionOutput updateServiceActionOutput) {
        this.updateServiceActionOutput = updateServiceActionOutput;
        return this;
    }
}