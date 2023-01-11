package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptionsProxyHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-app-id")
    public String xApideckAppId;
    public OptionsProxyHeaders withXApideckAppId(String xApideckAppId) {
        this.xApideckAppId = xApideckAppId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-consumer-id")
    public String xApideckConsumerId;
    public OptionsProxyHeaders withXApideckConsumerId(String xApideckConsumerId) {
        this.xApideckConsumerId = xApideckConsumerId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-downstream-authorization")
    public String xApideckDownstreamAuthorization;
    public OptionsProxyHeaders withXApideckDownstreamAuthorization(String xApideckDownstreamAuthorization) {
        this.xApideckDownstreamAuthorization = xApideckDownstreamAuthorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-downstream-url")
    public String xApideckDownstreamUrl;
    public OptionsProxyHeaders withXApideckDownstreamUrl(String xApideckDownstreamUrl) {
        this.xApideckDownstreamUrl = xApideckDownstreamUrl;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-service-id")
    public String xApideckServiceId;
    public OptionsProxyHeaders withXApideckServiceId(String xApideckServiceId) {
        this.xApideckServiceId = xApideckServiceId;
        return this;
    }
}