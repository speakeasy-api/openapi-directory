package openapisdk.models.operations;



public class DeleteStreamingImageResponse {
    public Object accessDeniedException;
    public DeleteStreamingImageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteStreamingImageResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteStreamingImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteStreamingImageResponse deleteStreamingImageResponse;
    public DeleteStreamingImageResponse withDeleteStreamingImageResponse(openapisdk.models.shared.DeleteStreamingImageResponse deleteStreamingImageResponse) {
        this.deleteStreamingImageResponse = deleteStreamingImageResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteStreamingImageResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteStreamingImageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteStreamingImageResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteStreamingImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteStreamingImageResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteStreamingImageResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}