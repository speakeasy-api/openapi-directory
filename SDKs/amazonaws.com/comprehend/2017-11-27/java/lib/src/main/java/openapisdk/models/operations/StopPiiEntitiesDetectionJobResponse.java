package openapisdk.models.operations;



public class StopPiiEntitiesDetectionJobResponse {
    public String contentType;
    public StopPiiEntitiesDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopPiiEntitiesDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StopPiiEntitiesDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object jobNotFoundException;
    public StopPiiEntitiesDetectionJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopPiiEntitiesDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopPiiEntitiesDetectionJobResponse stopPiiEntitiesDetectionJobResponse;
    public StopPiiEntitiesDetectionJobResponse withStopPiiEntitiesDetectionJobResponse(openapisdk.models.shared.StopPiiEntitiesDetectionJobResponse stopPiiEntitiesDetectionJobResponse) {
        this.stopPiiEntitiesDetectionJobResponse = stopPiiEntitiesDetectionJobResponse;
        return this;
    }
}