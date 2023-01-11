package openapisdk.models.operations;



public class DeleteProductResponse {
    public String contentType;
    public DeleteProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteProductOutput;
    public DeleteProductResponse withDeleteProductOutput(java.util.Map<String, Object> deleteProductOutput) {
        this.deleteProductOutput = deleteProductOutput;
        return this;
    }
    public Object invalidParametersException;
    public DeleteProductResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteProductResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteProductResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOptionNotMigratedException;
    public DeleteProductResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
}