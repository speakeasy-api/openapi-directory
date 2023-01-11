package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=service_id")
    public String serviceId;
    public ConnectionsDeletePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=unified_api")
    public String unifiedApi;
    public ConnectionsDeletePathParams withUnifiedApi(String unifiedApi) {
        this.unifiedApi = unifiedApi;
        return this;
    }
}