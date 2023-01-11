package openapisdk.models.operations;



public class ListPiiEntitiesDetectionJobsResponse {
    public String contentType;
    public ListPiiEntitiesDetectionJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListPiiEntitiesDetectionJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidFilterException;
    public ListPiiEntitiesDetectionJobsResponse withInvalidFilterException(Object invalidFilterException) {
        this.invalidFilterException = invalidFilterException;
        return this;
    }
    public Object invalidRequestException;
    public ListPiiEntitiesDetectionJobsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListPiiEntitiesDetectionJobsResponse listPiiEntitiesDetectionJobsResponse;
    public ListPiiEntitiesDetectionJobsResponse withListPiiEntitiesDetectionJobsResponse(openapisdk.models.shared.ListPiiEntitiesDetectionJobsResponse listPiiEntitiesDetectionJobsResponse) {
        this.listPiiEntitiesDetectionJobsResponse = listPiiEntitiesDetectionJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListPiiEntitiesDetectionJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListPiiEntitiesDetectionJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}