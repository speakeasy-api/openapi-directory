package openapisdk.models.operations;



public class UpdateProductResponse {
    public String contentType;
    public UpdateProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public UpdateProductResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateProductResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOptionNotMigratedException;
    public UpdateProductResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
    public openapisdk.models.shared.UpdateProductOutput updateProductOutput;
    public UpdateProductResponse withUpdateProductOutput(openapisdk.models.shared.UpdateProductOutput updateProductOutput) {
        this.updateProductOutput = updateProductOutput;
        return this;
    }
}