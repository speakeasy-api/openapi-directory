package openapisdk.models.operations;



public class PutConformancePackResponse {
    public Object conformancePackTemplateValidationException;
    public PutConformancePackResponse withConformancePackTemplateValidationException(Object conformancePackTemplateValidationException) {
        this.conformancePackTemplateValidationException = conformancePackTemplateValidationException;
        return this;
    }
    public String contentType;
    public PutConformancePackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientPermissionsException;
    public PutConformancePackResponse withInsufficientPermissionsException(Object insufficientPermissionsException) {
        this.insufficientPermissionsException = insufficientPermissionsException;
        return this;
    }
    public Object invalidParameterValueException;
    public PutConformancePackResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object maxNumberOfConformancePacksExceededException;
    public PutConformancePackResponse withMaxNumberOfConformancePacksExceededException(Object maxNumberOfConformancePacksExceededException) {
        this.maxNumberOfConformancePacksExceededException = maxNumberOfConformancePacksExceededException;
        return this;
    }
    public openapisdk.models.shared.PutConformancePackResponse putConformancePackResponse;
    public PutConformancePackResponse withPutConformancePackResponse(openapisdk.models.shared.PutConformancePackResponse putConformancePackResponse) {
        this.putConformancePackResponse = putConformancePackResponse;
        return this;
    }
    public Object resourceInUseException;
    public PutConformancePackResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public PutConformancePackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}