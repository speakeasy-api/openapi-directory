package openapisdk.models.operations;



public class StartPiiEntitiesDetectionJobResponse {
    public String contentType;
    public StartPiiEntitiesDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartPiiEntitiesDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StartPiiEntitiesDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object kmsKeyValidationException;
    public StartPiiEntitiesDetectionJobResponse withKmsKeyValidationException(Object kmsKeyValidationException) {
        this.kmsKeyValidationException = kmsKeyValidationException;
        return this;
    }
    public openapisdk.models.shared.StartPiiEntitiesDetectionJobResponse startPiiEntitiesDetectionJobResponse;
    public StartPiiEntitiesDetectionJobResponse withStartPiiEntitiesDetectionJobResponse(openapisdk.models.shared.StartPiiEntitiesDetectionJobResponse startPiiEntitiesDetectionJobResponse) {
        this.startPiiEntitiesDetectionJobResponse = startPiiEntitiesDetectionJobResponse;
        return this;
    }
    public Long statusCode;
    public StartPiiEntitiesDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartPiiEntitiesDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object tooManyTagsException;
    public StartPiiEntitiesDetectionJobResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}