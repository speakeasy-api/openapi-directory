package openapisdk.models.operations;



public class GetSchemaCreationStatusResponse {
    public Object badRequestException;
    public GetSchemaCreationStatusResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetSchemaCreationStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSchemaCreationStatusResponse getSchemaCreationStatusResponse;
    public GetSchemaCreationStatusResponse withGetSchemaCreationStatusResponse(openapisdk.models.shared.GetSchemaCreationStatusResponse getSchemaCreationStatusResponse) {
        this.getSchemaCreationStatusResponse = getSchemaCreationStatusResponse;
        return this;
    }
    public Object internalFailureException;
    public GetSchemaCreationStatusResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public GetSchemaCreationStatusResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetSchemaCreationStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetSchemaCreationStatusResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}