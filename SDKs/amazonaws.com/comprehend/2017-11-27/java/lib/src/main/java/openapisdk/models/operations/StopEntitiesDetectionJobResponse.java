package openapisdk.models.operations;



public class StopEntitiesDetectionJobResponse {
    public String contentType;
    public StopEntitiesDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopEntitiesDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StopEntitiesDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object jobNotFoundException;
    public StopEntitiesDetectionJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopEntitiesDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopEntitiesDetectionJobResponse stopEntitiesDetectionJobResponse;
    public StopEntitiesDetectionJobResponse withStopEntitiesDetectionJobResponse(openapisdk.models.shared.StopEntitiesDetectionJobResponse stopEntitiesDetectionJobResponse) {
        this.stopEntitiesDetectionJobResponse = stopEntitiesDetectionJobResponse;
        return this;
    }
}