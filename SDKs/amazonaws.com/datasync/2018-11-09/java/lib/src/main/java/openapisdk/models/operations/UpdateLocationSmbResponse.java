package openapisdk.models.operations;



public class UpdateLocationSmbResponse {
    public String contentType;
    public UpdateLocationSmbResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateLocationSmbResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateLocationSmbResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public UpdateLocationSmbResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateLocationSmbResponse;
    public UpdateLocationSmbResponse withUpdateLocationSmbResponse(java.util.Map<String, Object> updateLocationSmbResponse) {
        this.updateLocationSmbResponse = updateLocationSmbResponse;
        return this;
    }
}