package openapisdk.models.operations;



public class GetLaunchConfigurationResponse {
    public String contentType;
    public GetLaunchConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LaunchConfiguration launchConfiguration;
    public GetLaunchConfigurationResponse withLaunchConfiguration(openapisdk.models.shared.LaunchConfiguration launchConfiguration) {
        this.launchConfiguration = launchConfiguration;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLaunchConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetLaunchConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public GetLaunchConfigurationResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
}