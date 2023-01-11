package openapisdk.models.operations;



public class StopSentimentDetectionJobResponse {
    public String contentType;
    public StopSentimentDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopSentimentDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StopSentimentDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object jobNotFoundException;
    public StopSentimentDetectionJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopSentimentDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopSentimentDetectionJobResponse stopSentimentDetectionJobResponse;
    public StopSentimentDetectionJobResponse withStopSentimentDetectionJobResponse(openapisdk.models.shared.StopSentimentDetectionJobResponse stopSentimentDetectionJobResponse) {
        this.stopSentimentDetectionJobResponse = stopSentimentDetectionJobResponse;
        return this;
    }
}