package openapisdk.models.operations;



public class StopKeyPhrasesDetectionJobResponse {
    public String contentType;
    public StopKeyPhrasesDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopKeyPhrasesDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StopKeyPhrasesDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object jobNotFoundException;
    public StopKeyPhrasesDetectionJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopKeyPhrasesDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopKeyPhrasesDetectionJobResponse stopKeyPhrasesDetectionJobResponse;
    public StopKeyPhrasesDetectionJobResponse withStopKeyPhrasesDetectionJobResponse(openapisdk.models.shared.StopKeyPhrasesDetectionJobResponse stopKeyPhrasesDetectionJobResponse) {
        this.stopKeyPhrasesDetectionJobResponse = stopKeyPhrasesDetectionJobResponse;
        return this;
    }
}