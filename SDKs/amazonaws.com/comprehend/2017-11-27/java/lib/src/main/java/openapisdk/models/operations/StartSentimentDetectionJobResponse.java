package openapisdk.models.operations;



public class StartSentimentDetectionJobResponse {
    public String contentType;
    public StartSentimentDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartSentimentDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StartSentimentDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object kmsKeyValidationException;
    public StartSentimentDetectionJobResponse withKmsKeyValidationException(Object kmsKeyValidationException) {
        this.kmsKeyValidationException = kmsKeyValidationException;
        return this;
    }
    public openapisdk.models.shared.StartSentimentDetectionJobResponse startSentimentDetectionJobResponse;
    public StartSentimentDetectionJobResponse withStartSentimentDetectionJobResponse(openapisdk.models.shared.StartSentimentDetectionJobResponse startSentimentDetectionJobResponse) {
        this.startSentimentDetectionJobResponse = startSentimentDetectionJobResponse;
        return this;
    }
    public Long statusCode;
    public StartSentimentDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartSentimentDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object tooManyTagsException;
    public StartSentimentDetectionJobResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}