package openapisdk.models.operations;



public class StopEventsDetectionJobResponse {
    public String contentType;
    public StopEventsDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopEventsDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StopEventsDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object jobNotFoundException;
    public StopEventsDetectionJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopEventsDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopEventsDetectionJobResponse stopEventsDetectionJobResponse;
    public StopEventsDetectionJobResponse withStopEventsDetectionJobResponse(openapisdk.models.shared.StopEventsDetectionJobResponse stopEventsDetectionJobResponse) {
        this.stopEventsDetectionJobResponse = stopEventsDetectionJobResponse;
        return this;
    }
}