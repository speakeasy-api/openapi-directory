package openapisdk.models.operations;



public class CreateStreamingImageResponse {
    public Object accessDeniedException;
    public CreateStreamingImageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateStreamingImageResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateStreamingImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateStreamingImageResponse createStreamingImageResponse;
    public CreateStreamingImageResponse withCreateStreamingImageResponse(openapisdk.models.shared.CreateStreamingImageResponse createStreamingImageResponse) {
        this.createStreamingImageResponse = createStreamingImageResponse;
        return this;
    }
    public Object internalServerErrorException;
    public CreateStreamingImageResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateStreamingImageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateStreamingImageResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateStreamingImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateStreamingImageResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateStreamingImageResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}