package openapisdk.models.operations;



public class ListStreamingImagesResponse {
    public Object accessDeniedException;
    public ListStreamingImagesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListStreamingImagesResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListStreamingImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public ListStreamingImagesResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListStreamingImagesResponse listStreamingImagesResponse;
    public ListStreamingImagesResponse withListStreamingImagesResponse(openapisdk.models.shared.ListStreamingImagesResponse listStreamingImagesResponse) {
        this.listStreamingImagesResponse = listStreamingImagesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListStreamingImagesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListStreamingImagesResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListStreamingImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListStreamingImagesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListStreamingImagesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}