package openapisdk.models.operations;



public class UpdateApplicationMaintenanceConfigurationResponse {
    public Object concurrentModificationException;
    public UpdateApplicationMaintenanceConfigurationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateApplicationMaintenanceConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public UpdateApplicationMaintenanceConfigurationResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateApplicationMaintenanceConfigurationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateApplicationMaintenanceConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateApplicationMaintenanceConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public UpdateApplicationMaintenanceConfigurationResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
    public openapisdk.models.shared.UpdateApplicationMaintenanceConfigurationResponse updateApplicationMaintenanceConfigurationResponse;
    public UpdateApplicationMaintenanceConfigurationResponse withUpdateApplicationMaintenanceConfigurationResponse(openapisdk.models.shared.UpdateApplicationMaintenanceConfigurationResponse updateApplicationMaintenanceConfigurationResponse) {
        this.updateApplicationMaintenanceConfigurationResponse = updateApplicationMaintenanceConfigurationResponse;
        return this;
    }
}