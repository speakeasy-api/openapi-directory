package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImportedKeyMaterialRequest {
    public DeleteImportedKeyMaterialHeaders headers;
    public DeleteImportedKeyMaterialRequest withHeaders(DeleteImportedKeyMaterialHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteImportedKeyMaterialRequest request;
    public DeleteImportedKeyMaterialRequest withRequest(openapisdk.models.shared.DeleteImportedKeyMaterialRequest request) {
        this.request = request;
        return this;
    }
}