package openapisdk.models.operations;



public class DescribeLifecycleConfigurationResponse {
    public Object badRequest;
    public DescribeLifecycleConfigurationResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public DescribeLifecycleConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object fileSystemNotFound;
    public DescribeLifecycleConfigurationResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object internalServerError;
    public DescribeLifecycleConfigurationResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public openapisdk.models.shared.LifecycleConfigurationDescription lifecycleConfigurationDescription;
    public DescribeLifecycleConfigurationResponse withLifecycleConfigurationDescription(openapisdk.models.shared.LifecycleConfigurationDescription lifecycleConfigurationDescription) {
        this.lifecycleConfigurationDescription = lifecycleConfigurationDescription;
        return this;
    }
    public Long statusCode;
    public DescribeLifecycleConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}