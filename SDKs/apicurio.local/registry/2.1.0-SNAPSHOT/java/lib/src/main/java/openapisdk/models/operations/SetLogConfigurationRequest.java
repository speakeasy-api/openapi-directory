package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetLogConfigurationRequest {
    public SetLogConfigurationPathParams pathParams;
    public SetLogConfigurationRequest withPathParams(SetLogConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LogConfiguration request;
    public SetLogConfigurationRequest withRequest(openapisdk.models.shared.LogConfiguration request) {
        this.request = request;
        return this;
    }
}