package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectionSettingsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ConnectionSettingsUpdatePathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=service_id")
    public String serviceId;
    public ConnectionSettingsUpdatePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=unified_api")
    public String unifiedApi;
    public ConnectionSettingsUpdatePathParams withUnifiedApi(String unifiedApi) {
        this.unifiedApi = unifiedApi;
        return this;
    }
}