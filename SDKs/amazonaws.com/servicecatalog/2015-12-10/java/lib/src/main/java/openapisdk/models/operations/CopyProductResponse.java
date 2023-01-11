package openapisdk.models.operations;



public class CopyProductResponse {
    public String contentType;
    public CopyProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CopyProductOutput copyProductOutput;
    public CopyProductResponse withCopyProductOutput(openapisdk.models.shared.CopyProductOutput copyProductOutput) {
        this.copyProductOutput = copyProductOutput;
        return this;
    }
    public Object invalidParametersException;
    public CopyProductResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public CopyProductResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CopyProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}