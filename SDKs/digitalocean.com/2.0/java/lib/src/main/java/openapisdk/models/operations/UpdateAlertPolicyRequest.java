package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAlertPolicyRequest {
    public UpdateAlertPolicyPathParams pathParams;
    public UpdateAlertPolicyRequest withPathParams(UpdateAlertPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema request;
    public UpdateAlertPolicyRequest withRequest(openapisdk.models.shared.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema request) {
        this.request = request;
        return this;
    }
}