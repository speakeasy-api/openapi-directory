package openapisdk.models.operations;



public class DescribeEntitiesDetectionJobResponse {
    public String contentType;
    public DescribeEntitiesDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEntitiesDetectionJobResponse describeEntitiesDetectionJobResponse;
    public DescribeEntitiesDetectionJobResponse withDescribeEntitiesDetectionJobResponse(openapisdk.models.shared.DescribeEntitiesDetectionJobResponse describeEntitiesDetectionJobResponse) {
        this.describeEntitiesDetectionJobResponse = describeEntitiesDetectionJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeEntitiesDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeEntitiesDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object jobNotFoundException;
    public DescribeEntitiesDetectionJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeEntitiesDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeEntitiesDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}