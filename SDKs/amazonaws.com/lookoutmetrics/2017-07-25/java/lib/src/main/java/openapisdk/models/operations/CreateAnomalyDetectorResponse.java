package openapisdk.models.operations;



public class CreateAnomalyDetectorResponse {
    public Object accessDeniedException;
    public CreateAnomalyDetectorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateAnomalyDetectorResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateAnomalyDetectorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAnomalyDetectorResponse createAnomalyDetectorResponse;
    public CreateAnomalyDetectorResponse withCreateAnomalyDetectorResponse(openapisdk.models.shared.CreateAnomalyDetectorResponse createAnomalyDetectorResponse) {
        this.createAnomalyDetectorResponse = createAnomalyDetectorResponse;
        return this;
    }
    public Object internalServerException;
    public CreateAnomalyDetectorResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateAnomalyDetectorResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateAnomalyDetectorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateAnomalyDetectorResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public CreateAnomalyDetectorResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}