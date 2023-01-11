package openapisdk.models.operations;



public class StopDominantLanguageDetectionJobResponse {
    public String contentType;
    public StopDominantLanguageDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopDominantLanguageDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StopDominantLanguageDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object jobNotFoundException;
    public StopDominantLanguageDetectionJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopDominantLanguageDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopDominantLanguageDetectionJobResponse stopDominantLanguageDetectionJobResponse;
    public StopDominantLanguageDetectionJobResponse withStopDominantLanguageDetectionJobResponse(openapisdk.models.shared.StopDominantLanguageDetectionJobResponse stopDominantLanguageDetectionJobResponse) {
        this.stopDominantLanguageDetectionJobResponse = stopDominantLanguageDetectionJobResponse;
        return this;
    }
}