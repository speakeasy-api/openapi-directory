package openapisdk.models.operations;



public class DescribePhiDetectionJobResponse {
    public String contentType;
    public DescribePhiDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePhiDetectionJobResponse describePHIDetectionJobResponse;
    public DescribePhiDetectionJobResponse withDescribePhiDetectionJobResponse(openapisdk.models.shared.DescribePhiDetectionJobResponse describePHIDetectionJobResponse) {
        this.describePHIDetectionJobResponse = describePHIDetectionJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribePhiDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DescribePhiDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribePhiDetectionJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePhiDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribePhiDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}