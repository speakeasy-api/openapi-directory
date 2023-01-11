package openapisdk.models.operations;



public class ImportSourceCredentialsResponse {
    public Object accountLimitExceededException;
    public ImportSourceCredentialsResponse withAccountLimitExceededException(Object accountLimitExceededException) {
        this.accountLimitExceededException = accountLimitExceededException;
        return this;
    }
    public String contentType;
    public ImportSourceCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportSourceCredentialsOutput importSourceCredentialsOutput;
    public ImportSourceCredentialsResponse withImportSourceCredentialsOutput(openapisdk.models.shared.ImportSourceCredentialsOutput importSourceCredentialsOutput) {
        this.importSourceCredentialsOutput = importSourceCredentialsOutput;
        return this;
    }
    public Object invalidInputException;
    public ImportSourceCredentialsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public ImportSourceCredentialsResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public ImportSourceCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}