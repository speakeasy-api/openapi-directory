package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectionsOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=service_id")
    public String serviceId;
    public ConnectionsOnePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=unified_api")
    public String unifiedApi;
    public ConnectionsOnePathParams withUnifiedApi(String unifiedApi) {
        this.unifiedApi = unifiedApi;
        return this;
    }
}