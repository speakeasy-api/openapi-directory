package openapisdk.models.operations;



public class GetStudioMemberResponse {
    public Object accessDeniedException;
    public GetStudioMemberResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetStudioMemberResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetStudioMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetStudioMemberResponse getStudioMemberResponse;
    public GetStudioMemberResponse withGetStudioMemberResponse(openapisdk.models.shared.GetStudioMemberResponse getStudioMemberResponse) {
        this.getStudioMemberResponse = getStudioMemberResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetStudioMemberResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetStudioMemberResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetStudioMemberResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetStudioMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetStudioMemberResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetStudioMemberResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}