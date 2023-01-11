package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAccountSettingRequest {
    public DeleteAccountSettingHeaders headers;
    public DeleteAccountSettingRequest withHeaders(DeleteAccountSettingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAccountSettingRequest request;
    public DeleteAccountSettingRequest withRequest(openapisdk.models.shared.DeleteAccountSettingRequest request) {
        this.request = request;
        return this;
    }
}