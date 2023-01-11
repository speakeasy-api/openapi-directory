package openapisdk.models.operations;



public class DescribeEventsDetectionJobResponse {
    public String contentType;
    public DescribeEventsDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEventsDetectionJobResponse describeEventsDetectionJobResponse;
    public DescribeEventsDetectionJobResponse withDescribeEventsDetectionJobResponse(openapisdk.models.shared.DescribeEventsDetectionJobResponse describeEventsDetectionJobResponse) {
        this.describeEventsDetectionJobResponse = describeEventsDetectionJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeEventsDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeEventsDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object jobNotFoundException;
    public DescribeEventsDetectionJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeEventsDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeEventsDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}