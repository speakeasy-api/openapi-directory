package openapisdk.models.operations;



public class CreateConstraintResponse {
    public String contentType;
    public CreateConstraintResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateConstraintOutput createConstraintOutput;
    public CreateConstraintResponse withCreateConstraintOutput(openapisdk.models.shared.CreateConstraintOutput createConstraintOutput) {
        this.createConstraintOutput = createConstraintOutput;
        return this;
    }
    public Object duplicateResourceException;
    public CreateConstraintResponse withDuplicateResourceException(Object duplicateResourceException) {
        this.duplicateResourceException = duplicateResourceException;
        return this;
    }
    public Object invalidParametersException;
    public CreateConstraintResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object limitExceededException;
    public CreateConstraintResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateConstraintResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateConstraintResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}