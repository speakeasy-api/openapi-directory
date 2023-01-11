package openapisdk.models.operations;



public class DescribeTopicsDetectionJobResponse {
    public String contentType;
    public DescribeTopicsDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTopicsDetectionJobResponse describeTopicsDetectionJobResponse;
    public DescribeTopicsDetectionJobResponse withDescribeTopicsDetectionJobResponse(openapisdk.models.shared.DescribeTopicsDetectionJobResponse describeTopicsDetectionJobResponse) {
        this.describeTopicsDetectionJobResponse = describeTopicsDetectionJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeTopicsDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeTopicsDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object jobNotFoundException;
    public DescribeTopicsDetectionJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeTopicsDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeTopicsDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}