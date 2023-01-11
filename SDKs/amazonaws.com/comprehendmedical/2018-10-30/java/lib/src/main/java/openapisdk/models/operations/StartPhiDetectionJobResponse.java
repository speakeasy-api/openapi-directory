package openapisdk.models.operations;



public class StartPhiDetectionJobResponse {
    public String contentType;
    public StartPhiDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartPhiDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StartPhiDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartPhiDetectionJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartPhiDetectionJobResponse startPHIDetectionJobResponse;
    public StartPhiDetectionJobResponse withStartPhiDetectionJobResponse(openapisdk.models.shared.StartPhiDetectionJobResponse startPHIDetectionJobResponse) {
        this.startPHIDetectionJobResponse = startPHIDetectionJobResponse;
        return this;
    }
    public Long statusCode;
    public StartPhiDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartPhiDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}