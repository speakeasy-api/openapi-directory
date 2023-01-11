package openapisdk.models.operations;



public class StartEventsDetectionJobResponse {
    public String contentType;
    public StartEventsDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartEventsDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StartEventsDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object kmsKeyValidationException;
    public StartEventsDetectionJobResponse withKmsKeyValidationException(Object kmsKeyValidationException) {
        this.kmsKeyValidationException = kmsKeyValidationException;
        return this;
    }
    public openapisdk.models.shared.StartEventsDetectionJobResponse startEventsDetectionJobResponse;
    public StartEventsDetectionJobResponse withStartEventsDetectionJobResponse(openapisdk.models.shared.StartEventsDetectionJobResponse startEventsDetectionJobResponse) {
        this.startEventsDetectionJobResponse = startEventsDetectionJobResponse;
        return this;
    }
    public Long statusCode;
    public StartEventsDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartEventsDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object tooManyTagsException;
    public StartEventsDetectionJobResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}