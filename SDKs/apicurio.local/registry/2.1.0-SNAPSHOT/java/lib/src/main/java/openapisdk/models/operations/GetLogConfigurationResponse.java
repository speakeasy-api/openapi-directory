package openapisdk.models.operations;



public class GetLogConfigurationResponse {
    public String contentType;
    public GetLogConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetLogConfigurationResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.NamedLogConfiguration namedLogConfiguration;
    public GetLogConfigurationResponse withNamedLogConfiguration(openapisdk.models.shared.NamedLogConfiguration namedLogConfiguration) {
        this.namedLogConfiguration = namedLogConfiguration;
        return this;
    }
    public Long statusCode;
    public GetLogConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}