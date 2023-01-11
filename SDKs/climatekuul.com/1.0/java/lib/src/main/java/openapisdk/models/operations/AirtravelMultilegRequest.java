package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AirtravelMultilegRequest {
    public String serverURL;
    public AirtravelMultilegRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AirtravelMultilegRequest request;
    public AirtravelMultilegRequest withRequest(openapisdk.models.shared.AirtravelMultilegRequest request) {
        this.request = request;
        return this;
    }
}