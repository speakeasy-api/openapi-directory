package openapisdk.models.operations;



public class ListEntitiesDetectionJobsResponse {
    public String contentType;
    public ListEntitiesDetectionJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListEntitiesDetectionJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidFilterException;
    public ListEntitiesDetectionJobsResponse withInvalidFilterException(Object invalidFilterException) {
        this.invalidFilterException = invalidFilterException;
        return this;
    }
    public Object invalidRequestException;
    public ListEntitiesDetectionJobsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListEntitiesDetectionJobsResponse listEntitiesDetectionJobsResponse;
    public ListEntitiesDetectionJobsResponse withListEntitiesDetectionJobsResponse(openapisdk.models.shared.ListEntitiesDetectionJobsResponse listEntitiesDetectionJobsResponse) {
        this.listEntitiesDetectionJobsResponse = listEntitiesDetectionJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListEntitiesDetectionJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListEntitiesDetectionJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}