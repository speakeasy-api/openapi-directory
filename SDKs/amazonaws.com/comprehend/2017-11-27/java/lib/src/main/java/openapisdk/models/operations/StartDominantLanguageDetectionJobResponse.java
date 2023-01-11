package openapisdk.models.operations;



public class StartDominantLanguageDetectionJobResponse {
    public String contentType;
    public StartDominantLanguageDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartDominantLanguageDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StartDominantLanguageDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object kmsKeyValidationException;
    public StartDominantLanguageDetectionJobResponse withKmsKeyValidationException(Object kmsKeyValidationException) {
        this.kmsKeyValidationException = kmsKeyValidationException;
        return this;
    }
    public openapisdk.models.shared.StartDominantLanguageDetectionJobResponse startDominantLanguageDetectionJobResponse;
    public StartDominantLanguageDetectionJobResponse withStartDominantLanguageDetectionJobResponse(openapisdk.models.shared.StartDominantLanguageDetectionJobResponse startDominantLanguageDetectionJobResponse) {
        this.startDominantLanguageDetectionJobResponse = startDominantLanguageDetectionJobResponse;
        return this;
    }
    public Long statusCode;
    public StartDominantLanguageDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartDominantLanguageDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object tooManyTagsException;
    public StartDominantLanguageDetectionJobResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}