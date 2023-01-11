package openapisdk.models.operations;



public class GetStreamingImageResponse {
    public Object accessDeniedException;
    public GetStreamingImageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetStreamingImageResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetStreamingImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetStreamingImageResponse getStreamingImageResponse;
    public GetStreamingImageResponse withGetStreamingImageResponse(openapisdk.models.shared.GetStreamingImageResponse getStreamingImageResponse) {
        this.getStreamingImageResponse = getStreamingImageResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetStreamingImageResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetStreamingImageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetStreamingImageResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetStreamingImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetStreamingImageResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetStreamingImageResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}