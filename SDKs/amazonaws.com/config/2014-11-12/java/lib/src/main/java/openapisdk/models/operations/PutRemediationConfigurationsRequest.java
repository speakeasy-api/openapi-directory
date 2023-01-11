package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRemediationConfigurationsRequest {
    public PutRemediationConfigurationsHeaders headers;
    public PutRemediationConfigurationsRequest withHeaders(PutRemediationConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutRemediationConfigurationsRequest request;
    public PutRemediationConfigurationsRequest withRequest(openapisdk.models.shared.PutRemediationConfigurationsRequest request) {
        this.request = request;
        return this;
    }
}