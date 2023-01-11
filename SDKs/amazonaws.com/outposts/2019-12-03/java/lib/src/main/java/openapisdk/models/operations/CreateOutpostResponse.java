package openapisdk.models.operations;



public class CreateOutpostResponse {
    public Object accessDeniedException;
    public CreateOutpostResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateOutpostResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateOutpostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateOutpostOutput createOutpostOutput;
    public CreateOutpostResponse withCreateOutpostOutput(openapisdk.models.shared.CreateOutpostOutput createOutpostOutput) {
        this.createOutpostOutput = createOutpostOutput;
        return this;
    }
    public Object internalServerException;
    public CreateOutpostResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object notFoundException;
    public CreateOutpostResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateOutpostResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateOutpostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateOutpostResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}