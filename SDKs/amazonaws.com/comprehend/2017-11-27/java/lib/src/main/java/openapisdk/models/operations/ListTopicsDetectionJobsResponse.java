package openapisdk.models.operations;



public class ListTopicsDetectionJobsResponse {
    public String contentType;
    public ListTopicsDetectionJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListTopicsDetectionJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidFilterException;
    public ListTopicsDetectionJobsResponse withInvalidFilterException(Object invalidFilterException) {
        this.invalidFilterException = invalidFilterException;
        return this;
    }
    public Object invalidRequestException;
    public ListTopicsDetectionJobsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListTopicsDetectionJobsResponse listTopicsDetectionJobsResponse;
    public ListTopicsDetectionJobsResponse withListTopicsDetectionJobsResponse(openapisdk.models.shared.ListTopicsDetectionJobsResponse listTopicsDetectionJobsResponse) {
        this.listTopicsDetectionJobsResponse = listTopicsDetectionJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListTopicsDetectionJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListTopicsDetectionJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}