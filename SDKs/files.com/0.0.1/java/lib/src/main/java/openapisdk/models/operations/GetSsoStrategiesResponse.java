package openapisdk.models.operations;



public class GetSsoStrategiesResponse {
    public String contentType;
    public GetSsoStrategiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SsoStrategyEntity[] ssoStrategyEntities;
    public GetSsoStrategiesResponse withSsoStrategyEntities(openapisdk.models.shared.SsoStrategyEntity[] ssoStrategyEntities) {
        this.ssoStrategyEntities = ssoStrategyEntities;
        return this;
    }
    public Long statusCode;
    public GetSsoStrategiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}