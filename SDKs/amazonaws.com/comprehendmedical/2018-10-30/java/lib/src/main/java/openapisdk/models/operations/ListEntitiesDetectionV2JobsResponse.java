package openapisdk.models.operations;



public class ListEntitiesDetectionV2JobsResponse {
    public String contentType;
    public ListEntitiesDetectionV2JobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListEntitiesDetectionV2JobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ListEntitiesDetectionV2JobsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListEntitiesDetectionV2JobsResponse listEntitiesDetectionV2JobsResponse;
    public ListEntitiesDetectionV2JobsResponse withListEntitiesDetectionV2JobsResponse(openapisdk.models.shared.ListEntitiesDetectionV2JobsResponse listEntitiesDetectionV2JobsResponse) {
        this.listEntitiesDetectionV2JobsResponse = listEntitiesDetectionV2JobsResponse;
        return this;
    }
    public Long statusCode;
    public ListEntitiesDetectionV2JobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListEntitiesDetectionV2JobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public ListEntitiesDetectionV2JobsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}