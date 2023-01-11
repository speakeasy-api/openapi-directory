package openapisdk.models.operations;



public class GetMasterAccountResponse {
    public Object accessDeniedException;
    public GetMasterAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetMasterAccountResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetMasterAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMasterAccountResponse getMasterAccountResponse;
    public GetMasterAccountResponse withGetMasterAccountResponse(openapisdk.models.shared.GetMasterAccountResponse getMasterAccountResponse) {
        this.getMasterAccountResponse = getMasterAccountResponse;
        return this;
    }
    public Object internalServerException;
    public GetMasterAccountResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetMasterAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetMasterAccountResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetMasterAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetMasterAccountResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetMasterAccountResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}