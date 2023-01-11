package openapisdk.models.operations;



public class ExportConfigurationsResponse {
    public Object authorizationErrorException;
    public ExportConfigurationsResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public ExportConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExportConfigurationsResponse exportConfigurationsResponse;
    public ExportConfigurationsResponse withExportConfigurationsResponse(openapisdk.models.shared.ExportConfigurationsResponse exportConfigurationsResponse) {
        this.exportConfigurationsResponse = exportConfigurationsResponse;
        return this;
    }
    public Object homeRegionNotSetException;
    public ExportConfigurationsResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public ExportConfigurationsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public ExportConfigurationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object operationNotPermittedException;
    public ExportConfigurationsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object serverInternalErrorException;
    public ExportConfigurationsResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public ExportConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}