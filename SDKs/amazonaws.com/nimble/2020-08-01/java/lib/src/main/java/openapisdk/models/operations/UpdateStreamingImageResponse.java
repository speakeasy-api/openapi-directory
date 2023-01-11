package openapisdk.models.operations;



public class UpdateStreamingImageResponse {
    public Object accessDeniedException;
    public UpdateStreamingImageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateStreamingImageResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateStreamingImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateStreamingImageResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateStreamingImageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateStreamingImageResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateStreamingImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateStreamingImageResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateStreamingImageResponse updateStreamingImageResponse;
    public UpdateStreamingImageResponse withUpdateStreamingImageResponse(openapisdk.models.shared.UpdateStreamingImageResponse updateStreamingImageResponse) {
        this.updateStreamingImageResponse = updateStreamingImageResponse;
        return this;
    }
    public Object validationException;
    public UpdateStreamingImageResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}