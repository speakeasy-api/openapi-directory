package openapisdk.models.operations;



public class ListEulaAcceptancesResponse {
    public Object accessDeniedException;
    public ListEulaAcceptancesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListEulaAcceptancesResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListEulaAcceptancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public ListEulaAcceptancesResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListEulaAcceptancesResponse listEulaAcceptancesResponse;
    public ListEulaAcceptancesResponse withListEulaAcceptancesResponse(openapisdk.models.shared.ListEulaAcceptancesResponse listEulaAcceptancesResponse) {
        this.listEulaAcceptancesResponse = listEulaAcceptancesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListEulaAcceptancesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListEulaAcceptancesResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListEulaAcceptancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListEulaAcceptancesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListEulaAcceptancesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}