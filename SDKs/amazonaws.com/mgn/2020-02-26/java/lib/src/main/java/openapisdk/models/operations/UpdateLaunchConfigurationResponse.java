package openapisdk.models.operations;



public class UpdateLaunchConfigurationResponse {
    public Object conflictException;
    public UpdateLaunchConfigurationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateLaunchConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LaunchConfiguration launchConfiguration;
    public UpdateLaunchConfigurationResponse withLaunchConfiguration(openapisdk.models.shared.LaunchConfiguration launchConfiguration) {
        this.launchConfiguration = launchConfiguration;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateLaunchConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateLaunchConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public UpdateLaunchConfigurationResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    public Object validationException;
    public UpdateLaunchConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}