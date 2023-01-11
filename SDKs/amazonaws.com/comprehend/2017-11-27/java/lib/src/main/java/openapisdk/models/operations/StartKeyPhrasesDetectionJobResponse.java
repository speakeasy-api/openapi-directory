package openapisdk.models.operations;



public class StartKeyPhrasesDetectionJobResponse {
    public String contentType;
    public StartKeyPhrasesDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartKeyPhrasesDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StartKeyPhrasesDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object kmsKeyValidationException;
    public StartKeyPhrasesDetectionJobResponse withKmsKeyValidationException(Object kmsKeyValidationException) {
        this.kmsKeyValidationException = kmsKeyValidationException;
        return this;
    }
    public openapisdk.models.shared.StartKeyPhrasesDetectionJobResponse startKeyPhrasesDetectionJobResponse;
    public StartKeyPhrasesDetectionJobResponse withStartKeyPhrasesDetectionJobResponse(openapisdk.models.shared.StartKeyPhrasesDetectionJobResponse startKeyPhrasesDetectionJobResponse) {
        this.startKeyPhrasesDetectionJobResponse = startKeyPhrasesDetectionJobResponse;
        return this;
    }
    public Long statusCode;
    public StartKeyPhrasesDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartKeyPhrasesDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object tooManyTagsException;
    public StartKeyPhrasesDetectionJobResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}