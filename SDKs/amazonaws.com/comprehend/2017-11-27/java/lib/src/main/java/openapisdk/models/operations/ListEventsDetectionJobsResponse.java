package openapisdk.models.operations;



public class ListEventsDetectionJobsResponse {
    public String contentType;
    public ListEventsDetectionJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListEventsDetectionJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidFilterException;
    public ListEventsDetectionJobsResponse withInvalidFilterException(Object invalidFilterException) {
        this.invalidFilterException = invalidFilterException;
        return this;
    }
    public Object invalidRequestException;
    public ListEventsDetectionJobsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListEventsDetectionJobsResponse listEventsDetectionJobsResponse;
    public ListEventsDetectionJobsResponse withListEventsDetectionJobsResponse(openapisdk.models.shared.ListEventsDetectionJobsResponse listEventsDetectionJobsResponse) {
        this.listEventsDetectionJobsResponse = listEventsDetectionJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListEventsDetectionJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListEventsDetectionJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}