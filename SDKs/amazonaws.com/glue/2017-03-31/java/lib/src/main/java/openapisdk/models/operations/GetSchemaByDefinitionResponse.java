package openapisdk.models.operations;



public class GetSchemaByDefinitionResponse {
    public Object accessDeniedException;
    public GetSchemaByDefinitionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetSchemaByDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetSchemaByDefinitionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetSchemaByDefinitionResponse getSchemaByDefinitionResponse;
    public GetSchemaByDefinitionResponse withGetSchemaByDefinitionResponse(openapisdk.models.shared.GetSchemaByDefinitionResponse getSchemaByDefinitionResponse) {
        this.getSchemaByDefinitionResponse = getSchemaByDefinitionResponse;
        return this;
    }
    public Object internalServiceException;
    public GetSchemaByDefinitionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetSchemaByDefinitionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public GetSchemaByDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}