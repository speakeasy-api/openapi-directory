package openapisdk.models.operations;



public class GetPendingJobExecutionsResponse {
    public Object certificateValidationException;
    public GetPendingJobExecutionsResponse withCertificateValidationException(Object certificateValidationException) {
        this.certificateValidationException = certificateValidationException;
        return this;
    }
    public String contentType;
    public GetPendingJobExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPendingJobExecutionsResponse getPendingJobExecutionsResponse;
    public GetPendingJobExecutionsResponse withGetPendingJobExecutionsResponse(openapisdk.models.shared.GetPendingJobExecutionsResponse getPendingJobExecutionsResponse) {
        this.getPendingJobExecutionsResponse = getPendingJobExecutionsResponse;
        return this;
    }
    public Object invalidRequestException;
    public GetPendingJobExecutionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetPendingJobExecutionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetPendingJobExecutionsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetPendingJobExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetPendingJobExecutionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}