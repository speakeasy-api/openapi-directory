package openapisdk.models.operations;



public class DescribeDominantLanguageDetectionJobResponse {
    public String contentType;
    public DescribeDominantLanguageDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDominantLanguageDetectionJobResponse describeDominantLanguageDetectionJobResponse;
    public DescribeDominantLanguageDetectionJobResponse withDescribeDominantLanguageDetectionJobResponse(openapisdk.models.shared.DescribeDominantLanguageDetectionJobResponse describeDominantLanguageDetectionJobResponse) {
        this.describeDominantLanguageDetectionJobResponse = describeDominantLanguageDetectionJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeDominantLanguageDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeDominantLanguageDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object jobNotFoundException;
    public DescribeDominantLanguageDetectionJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDominantLanguageDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeDominantLanguageDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}