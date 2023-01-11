package openapisdk.models.operations;



public class DescribeSentimentDetectionJobResponse {
    public String contentType;
    public DescribeSentimentDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSentimentDetectionJobResponse describeSentimentDetectionJobResponse;
    public DescribeSentimentDetectionJobResponse withDescribeSentimentDetectionJobResponse(openapisdk.models.shared.DescribeSentimentDetectionJobResponse describeSentimentDetectionJobResponse) {
        this.describeSentimentDetectionJobResponse = describeSentimentDetectionJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeSentimentDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeSentimentDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object jobNotFoundException;
    public DescribeSentimentDetectionJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeSentimentDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeSentimentDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}