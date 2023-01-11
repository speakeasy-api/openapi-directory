package openapisdk.models.operations;



public class PutDataLakeSettingsResponse {
    public String contentType;
    public PutDataLakeSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public PutDataLakeSettingsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public PutDataLakeSettingsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public java.util.Map<String, Object> putDataLakeSettingsResponse;
    public PutDataLakeSettingsResponse withPutDataLakeSettingsResponse(java.util.Map<String, Object> putDataLakeSettingsResponse) {
        this.putDataLakeSettingsResponse = putDataLakeSettingsResponse;
        return this;
    }
    public Long statusCode;
    public PutDataLakeSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}