package openapisdk.models.operations;



public class StopEntitiesDetectionV2JobResponse {
    public String contentType;
    public StopEntitiesDetectionV2JobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopEntitiesDetectionV2JobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StopEntitiesDetectionV2JobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopEntitiesDetectionV2JobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopEntitiesDetectionV2JobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopEntitiesDetectionV2JobResponse stopEntitiesDetectionV2JobResponse;
    public StopEntitiesDetectionV2JobResponse withStopEntitiesDetectionV2JobResponse(openapisdk.models.shared.StopEntitiesDetectionV2JobResponse stopEntitiesDetectionV2JobResponse) {
        this.stopEntitiesDetectionV2JobResponse = stopEntitiesDetectionV2JobResponse;
        return this;
    }
}