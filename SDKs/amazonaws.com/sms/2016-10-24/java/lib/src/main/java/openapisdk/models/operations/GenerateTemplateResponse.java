package openapisdk.models.operations;



public class GenerateTemplateResponse {
    public String contentType;
    public GenerateTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateTemplateResponse generateTemplateResponse;
    public GenerateTemplateResponse withGenerateTemplateResponse(openapisdk.models.shared.GenerateTemplateResponse generateTemplateResponse) {
        this.generateTemplateResponse = generateTemplateResponse;
        return this;
    }
    public Object internalError;
    public GenerateTemplateResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public GenerateTemplateResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public GenerateTemplateResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public GenerateTemplateResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public GenerateTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public GenerateTemplateResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}