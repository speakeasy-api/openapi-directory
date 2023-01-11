package openapisdk.models.operations;



public class GenerateChangeSetResponse {
    public String contentType;
    public GenerateChangeSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateChangeSetResponse generateChangeSetResponse;
    public GenerateChangeSetResponse withGenerateChangeSetResponse(openapisdk.models.shared.GenerateChangeSetResponse generateChangeSetResponse) {
        this.generateChangeSetResponse = generateChangeSetResponse;
        return this;
    }
    public Object internalError;
    public GenerateChangeSetResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public GenerateChangeSetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public GenerateChangeSetResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public GenerateChangeSetResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public GenerateChangeSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public GenerateChangeSetResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}