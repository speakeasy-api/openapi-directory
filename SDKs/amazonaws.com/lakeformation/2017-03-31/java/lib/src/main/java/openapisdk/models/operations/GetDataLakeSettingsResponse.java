package openapisdk.models.operations;



public class GetDataLakeSettingsResponse {
    public String contentType;
    public GetDataLakeSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetDataLakeSettingsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetDataLakeSettingsResponse getDataLakeSettingsResponse;
    public GetDataLakeSettingsResponse withGetDataLakeSettingsResponse(openapisdk.models.shared.GetDataLakeSettingsResponse getDataLakeSettingsResponse) {
        this.getDataLakeSettingsResponse = getDataLakeSettingsResponse;
        return this;
    }
    public Object internalServiceException;
    public GetDataLakeSettingsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetDataLakeSettingsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public GetDataLakeSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}