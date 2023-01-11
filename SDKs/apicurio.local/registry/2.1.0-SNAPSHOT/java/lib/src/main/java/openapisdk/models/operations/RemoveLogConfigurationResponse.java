package openapisdk.models.operations;



public class RemoveLogConfigurationResponse {
    public String contentType;
    public RemoveLogConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public RemoveLogConfigurationResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.NamedLogConfiguration namedLogConfiguration;
    public RemoveLogConfigurationResponse withNamedLogConfiguration(openapisdk.models.shared.NamedLogConfiguration namedLogConfiguration) {
        this.namedLogConfiguration = namedLogConfiguration;
        return this;
    }
    public Long statusCode;
    public RemoveLogConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}