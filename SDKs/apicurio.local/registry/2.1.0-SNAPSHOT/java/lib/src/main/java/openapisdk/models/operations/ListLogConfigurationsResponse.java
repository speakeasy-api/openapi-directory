package openapisdk.models.operations;



public class ListLogConfigurationsResponse {
    public String contentType;
    public ListLogConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public ListLogConfigurationsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.NamedLogConfiguration[] namedLogConfigurations;
    public ListLogConfigurationsResponse withNamedLogConfigurations(openapisdk.models.shared.NamedLogConfiguration[] namedLogConfigurations) {
        this.namedLogConfigurations = namedLogConfigurations;
        return this;
    }
    public Long statusCode;
    public ListLogConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}