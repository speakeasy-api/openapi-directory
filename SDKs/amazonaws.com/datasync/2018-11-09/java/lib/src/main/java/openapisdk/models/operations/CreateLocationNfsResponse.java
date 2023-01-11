package openapisdk.models.operations;



public class CreateLocationNfsResponse {
    public String contentType;
    public CreateLocationNfsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLocationNfsResponse createLocationNfsResponse;
    public CreateLocationNfsResponse withCreateLocationNfsResponse(openapisdk.models.shared.CreateLocationNfsResponse createLocationNfsResponse) {
        this.createLocationNfsResponse = createLocationNfsResponse;
        return this;
    }
    public Object internalException;
    public CreateLocationNfsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public CreateLocationNfsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateLocationNfsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}