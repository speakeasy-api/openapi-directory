package openapisdk.models.operations;



public class ListSentimentDetectionJobsResponse {
    public String contentType;
    public ListSentimentDetectionJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListSentimentDetectionJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidFilterException;
    public ListSentimentDetectionJobsResponse withInvalidFilterException(Object invalidFilterException) {
        this.invalidFilterException = invalidFilterException;
        return this;
    }
    public Object invalidRequestException;
    public ListSentimentDetectionJobsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListSentimentDetectionJobsResponse listSentimentDetectionJobsResponse;
    public ListSentimentDetectionJobsResponse withListSentimentDetectionJobsResponse(openapisdk.models.shared.ListSentimentDetectionJobsResponse listSentimentDetectionJobsResponse) {
        this.listSentimentDetectionJobsResponse = listSentimentDetectionJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListSentimentDetectionJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListSentimentDetectionJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}