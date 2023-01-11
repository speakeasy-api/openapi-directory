package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProxyHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-app-id")
    public String xApideckAppId;
    public PostProxyHeaders withXApideckAppId(String xApideckAppId) {
        this.xApideckAppId = xApideckAppId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-consumer-id")
    public String xApideckConsumerId;
    public PostProxyHeaders withXApideckConsumerId(String xApideckConsumerId) {
        this.xApideckConsumerId = xApideckConsumerId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-downstream-authorization")
    public String xApideckDownstreamAuthorization;
    public PostProxyHeaders withXApideckDownstreamAuthorization(String xApideckDownstreamAuthorization) {
        this.xApideckDownstreamAuthorization = xApideckDownstreamAuthorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-downstream-url")
    public String xApideckDownstreamUrl;
    public PostProxyHeaders withXApideckDownstreamUrl(String xApideckDownstreamUrl) {
        this.xApideckDownstreamUrl = xApideckDownstreamUrl;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-service-id")
    public String xApideckServiceId;
    public PostProxyHeaders withXApideckServiceId(String xApideckServiceId) {
        this.xApideckServiceId = xApideckServiceId;
        return this;
    }
}