package openapisdk.models.operations;



public class CreateLocationObjectStorageResponse {
    public String contentType;
    public CreateLocationObjectStorageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLocationObjectStorageResponse createLocationObjectStorageResponse;
    public CreateLocationObjectStorageResponse withCreateLocationObjectStorageResponse(openapisdk.models.shared.CreateLocationObjectStorageResponse createLocationObjectStorageResponse) {
        this.createLocationObjectStorageResponse = createLocationObjectStorageResponse;
        return this;
    }
    public Object internalException;
    public CreateLocationObjectStorageResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public CreateLocationObjectStorageResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateLocationObjectStorageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}