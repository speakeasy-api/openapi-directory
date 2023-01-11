package openapisdk.models.operations;



public class AutoGetAutoImportConfigurationResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public AutoGetAutoImportConfigurationResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public AutoGetAutoImportConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AutoGetAutoImportConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutoImportConfiguration autoImportConfiguration;
    public AutoGetAutoImportConfigurationResponse withAutoImportConfiguration(openapisdk.models.shared.AutoImportConfiguration autoImportConfiguration) {
        this.autoImportConfiguration = autoImportConfiguration;
        return this;
    }
}