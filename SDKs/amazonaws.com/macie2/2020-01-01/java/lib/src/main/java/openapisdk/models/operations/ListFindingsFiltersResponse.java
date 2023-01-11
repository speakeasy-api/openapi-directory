package openapisdk.models.operations;



public class ListFindingsFiltersResponse {
    public Object accessDeniedException;
    public ListFindingsFiltersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListFindingsFiltersResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListFindingsFiltersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListFindingsFiltersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListFindingsFiltersResponse listFindingsFiltersResponse;
    public ListFindingsFiltersResponse withListFindingsFiltersResponse(openapisdk.models.shared.ListFindingsFiltersResponse listFindingsFiltersResponse) {
        this.listFindingsFiltersResponse = listFindingsFiltersResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFindingsFiltersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListFindingsFiltersResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListFindingsFiltersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFindingsFiltersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListFindingsFiltersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}