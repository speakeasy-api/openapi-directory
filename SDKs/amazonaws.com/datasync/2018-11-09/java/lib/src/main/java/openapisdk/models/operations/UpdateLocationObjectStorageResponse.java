package openapisdk.models.operations;



public class UpdateLocationObjectStorageResponse {
    public String contentType;
    public UpdateLocationObjectStorageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateLocationObjectStorageResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateLocationObjectStorageResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public UpdateLocationObjectStorageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateLocationObjectStorageResponse;
    public UpdateLocationObjectStorageResponse withUpdateLocationObjectStorageResponse(java.util.Map<String, Object> updateLocationObjectStorageResponse) {
        this.updateLocationObjectStorageResponse = updateLocationObjectStorageResponse;
        return this;
    }
}