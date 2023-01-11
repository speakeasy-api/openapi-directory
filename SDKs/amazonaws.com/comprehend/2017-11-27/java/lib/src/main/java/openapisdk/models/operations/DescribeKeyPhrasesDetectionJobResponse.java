package openapisdk.models.operations;



public class DescribeKeyPhrasesDetectionJobResponse {
    public String contentType;
    public DescribeKeyPhrasesDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeKeyPhrasesDetectionJobResponse describeKeyPhrasesDetectionJobResponse;
    public DescribeKeyPhrasesDetectionJobResponse withDescribeKeyPhrasesDetectionJobResponse(openapisdk.models.shared.DescribeKeyPhrasesDetectionJobResponse describeKeyPhrasesDetectionJobResponse) {
        this.describeKeyPhrasesDetectionJobResponse = describeKeyPhrasesDetectionJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeKeyPhrasesDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeKeyPhrasesDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object jobNotFoundException;
    public DescribeKeyPhrasesDetectionJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeKeyPhrasesDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeKeyPhrasesDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}