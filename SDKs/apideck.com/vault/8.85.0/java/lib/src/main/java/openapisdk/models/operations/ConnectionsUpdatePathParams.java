package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectionsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=service_id")
    public String serviceId;
    public ConnectionsUpdatePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=unified_api")
    public String unifiedApi;
    public ConnectionsUpdatePathParams withUnifiedApi(String unifiedApi) {
        this.unifiedApi = unifiedApi;
        return this;
    }
}