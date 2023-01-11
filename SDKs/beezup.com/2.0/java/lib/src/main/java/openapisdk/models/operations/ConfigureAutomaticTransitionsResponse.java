package openapisdk.models.operations;



public class ConfigureAutomaticTransitionsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ConfigureAutomaticTransitionsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ConfigureAutomaticTransitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConfigureAutomaticTransitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}