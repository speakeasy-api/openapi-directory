package openapisdk.models.operations;



public class GetSsoStrategiesIdResponse {
    public String contentType;
    public GetSsoStrategiesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SsoStrategyEntity ssoStrategyEntity;
    public GetSsoStrategiesIdResponse withSsoStrategyEntity(openapisdk.models.shared.SsoStrategyEntity ssoStrategyEntity) {
        this.ssoStrategyEntity = ssoStrategyEntity;
        return this;
    }
    public Long statusCode;
    public GetSsoStrategiesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}