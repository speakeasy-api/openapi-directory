package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyBackupAttributesRequest {
    public ModifyBackupAttributesHeaders headers;
    public ModifyBackupAttributesRequest withHeaders(ModifyBackupAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyBackupAttributesRequest request;
    public ModifyBackupAttributesRequest withRequest(openapisdk.models.shared.ModifyBackupAttributesRequest request) {
        this.request = request;
        return this;
    }
}