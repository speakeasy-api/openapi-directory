package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDataCatalogEncryptionSettingsRequest {
    public PutDataCatalogEncryptionSettingsHeaders headers;
    public PutDataCatalogEncryptionSettingsRequest withHeaders(PutDataCatalogEncryptionSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutDataCatalogEncryptionSettingsRequest request;
    public PutDataCatalogEncryptionSettingsRequest withRequest(openapisdk.models.shared.PutDataCatalogEncryptionSettingsRequest request) {
        this.request = request;
        return this;
    }
}