package openapisdk.models.operations;



public class StartEntitiesDetectionJobResponse {
    public String contentType;
    public StartEntitiesDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartEntitiesDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StartEntitiesDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object kmsKeyValidationException;
    public StartEntitiesDetectionJobResponse withKmsKeyValidationException(Object kmsKeyValidationException) {
        this.kmsKeyValidationException = kmsKeyValidationException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartEntitiesDetectionJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public StartEntitiesDetectionJobResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public openapisdk.models.shared.StartEntitiesDetectionJobResponse startEntitiesDetectionJobResponse;
    public StartEntitiesDetectionJobResponse withStartEntitiesDetectionJobResponse(openapisdk.models.shared.StartEntitiesDetectionJobResponse startEntitiesDetectionJobResponse) {
        this.startEntitiesDetectionJobResponse = startEntitiesDetectionJobResponse;
        return this;
    }
    public Long statusCode;
    public StartEntitiesDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartEntitiesDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object tooManyTagsException;
    public StartEntitiesDetectionJobResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}