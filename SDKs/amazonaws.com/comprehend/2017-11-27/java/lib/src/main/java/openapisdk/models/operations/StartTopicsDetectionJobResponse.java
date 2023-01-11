package openapisdk.models.operations;



public class StartTopicsDetectionJobResponse {
    public String contentType;
    public StartTopicsDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartTopicsDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StartTopicsDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object kmsKeyValidationException;
    public StartTopicsDetectionJobResponse withKmsKeyValidationException(Object kmsKeyValidationException) {
        this.kmsKeyValidationException = kmsKeyValidationException;
        return this;
    }
    public openapisdk.models.shared.StartTopicsDetectionJobResponse startTopicsDetectionJobResponse;
    public StartTopicsDetectionJobResponse withStartTopicsDetectionJobResponse(openapisdk.models.shared.StartTopicsDetectionJobResponse startTopicsDetectionJobResponse) {
        this.startTopicsDetectionJobResponse = startTopicsDetectionJobResponse;
        return this;
    }
    public Long statusCode;
    public StartTopicsDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartTopicsDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object tooManyTagsException;
    public StartTopicsDetectionJobResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}