package openapisdk.models.operations;



public class GetAdministratorAccountResponse {
    public Object accessDeniedException;
    public GetAdministratorAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetAdministratorAccountResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetAdministratorAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAdministratorAccountResponse getAdministratorAccountResponse;
    public GetAdministratorAccountResponse withGetAdministratorAccountResponse(openapisdk.models.shared.GetAdministratorAccountResponse getAdministratorAccountResponse) {
        this.getAdministratorAccountResponse = getAdministratorAccountResponse;
        return this;
    }
    public Object internalServerException;
    public GetAdministratorAccountResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAdministratorAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetAdministratorAccountResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetAdministratorAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetAdministratorAccountResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetAdministratorAccountResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}