package openapisdk.models.operations;



public class CreateLocationSmbResponse {
    public String contentType;
    public CreateLocationSmbResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLocationSmbResponse createLocationSmbResponse;
    public CreateLocationSmbResponse withCreateLocationSmbResponse(openapisdk.models.shared.CreateLocationSmbResponse createLocationSmbResponse) {
        this.createLocationSmbResponse = createLocationSmbResponse;
        return this;
    }
    public Object internalException;
    public CreateLocationSmbResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public CreateLocationSmbResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateLocationSmbResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}