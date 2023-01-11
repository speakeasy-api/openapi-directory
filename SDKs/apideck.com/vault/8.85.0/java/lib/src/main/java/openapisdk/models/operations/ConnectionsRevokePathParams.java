package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectionsRevokePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public ConnectionsRevokePathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=service_id")
    public String serviceId;
    public ConnectionsRevokePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}