package openapisdk.models.operations;



public class StopPhiDetectionJobResponse {
    public String contentType;
    public StopPhiDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopPhiDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StopPhiDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopPhiDetectionJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopPhiDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopPhiDetectionJobResponse stopPHIDetectionJobResponse;
    public StopPhiDetectionJobResponse withStopPhiDetectionJobResponse(openapisdk.models.shared.StopPhiDetectionJobResponse stopPHIDetectionJobResponse) {
        this.stopPHIDetectionJobResponse = stopPHIDetectionJobResponse;
        return this;
    }
}