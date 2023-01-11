package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportSshPublicKeyRequest {
    public ImportSshPublicKeyHeaders headers;
    public ImportSshPublicKeyRequest withHeaders(ImportSshPublicKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportSshPublicKeyRequest request;
    public ImportSshPublicKeyRequest withRequest(openapisdk.models.shared.ImportSshPublicKeyRequest request) {
        this.request = request;
        return this;
    }
}