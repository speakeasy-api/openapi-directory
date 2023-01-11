package openapisdk.models.operations;



public class StartMaintenanceResponse {
    public String contentType;
    public StartMaintenanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidStateException;
    public StartMaintenanceResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartMaintenanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartMaintenanceResponse startMaintenanceResponse;
    public StartMaintenanceResponse withStartMaintenanceResponse(openapisdk.models.shared.StartMaintenanceResponse startMaintenanceResponse) {
        this.startMaintenanceResponse = startMaintenanceResponse;
        return this;
    }
    public Long statusCode;
    public StartMaintenanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public StartMaintenanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}