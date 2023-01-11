package openapisdk.models.operations;



public class SetLogConfigurationResponse {
    public String contentType;
    public SetLogConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public SetLogConfigurationResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.NamedLogConfiguration namedLogConfiguration;
    public SetLogConfigurationResponse withNamedLogConfiguration(openapisdk.models.shared.NamedLogConfiguration namedLogConfiguration) {
        this.namedLogConfiguration = namedLogConfiguration;
        return this;
    }
    public Long statusCode;
    public SetLogConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}