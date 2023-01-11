package openapisdk.models.operations;



public class CreateProductResponse {
    public String contentType;
    public CreateProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateProductOutput createProductOutput;
    public CreateProductResponse withCreateProductOutput(openapisdk.models.shared.CreateProductOutput createProductOutput) {
        this.createProductOutput = createProductOutput;
        return this;
    }
    public Object invalidParametersException;
    public CreateProductResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object limitExceededException;
    public CreateProductResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOptionNotMigratedException;
    public CreateProductResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
}