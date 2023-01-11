package openapisdk.models.operations;



public class CreateLocationEfsResponse {
    public String contentType;
    public CreateLocationEfsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLocationEfsResponse createLocationEfsResponse;
    public CreateLocationEfsResponse withCreateLocationEfsResponse(openapisdk.models.shared.CreateLocationEfsResponse createLocationEfsResponse) {
        this.createLocationEfsResponse = createLocationEfsResponse;
        return this;
    }
    public Object internalException;
    public CreateLocationEfsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public CreateLocationEfsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateLocationEfsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}