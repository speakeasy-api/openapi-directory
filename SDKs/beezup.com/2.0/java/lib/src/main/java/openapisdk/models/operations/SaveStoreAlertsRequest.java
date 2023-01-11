package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveStoreAlertsRequest {
    public SaveStoreAlertsPathParams pathParams;
    public SaveStoreAlertsRequest withPathParams(SaveStoreAlertsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, openapisdk.models.shared.SaveStoreAlertRequest> request;
    public SaveStoreAlertsRequest withRequest(java.util.Map<String, openapisdk.models.shared.SaveStoreAlertRequest> request) {
        this.request = request;
        return this;
    }
}