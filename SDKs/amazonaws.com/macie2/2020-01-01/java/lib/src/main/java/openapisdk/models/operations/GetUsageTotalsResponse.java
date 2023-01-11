package openapisdk.models.operations;



public class GetUsageTotalsResponse {
    public Object accessDeniedException;
    public GetUsageTotalsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetUsageTotalsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetUsageTotalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetUsageTotalsResponse getUsageTotalsResponse;
    public GetUsageTotalsResponse withGetUsageTotalsResponse(openapisdk.models.shared.GetUsageTotalsResponse getUsageTotalsResponse) {
        this.getUsageTotalsResponse = getUsageTotalsResponse;
        return this;
    }
    public Object internalServerException;
    public GetUsageTotalsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetUsageTotalsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetUsageTotalsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetUsageTotalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetUsageTotalsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetUsageTotalsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}