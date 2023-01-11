package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDataCatalogEncryptionSettingsRequest {
    public GetDataCatalogEncryptionSettingsHeaders headers;
    public GetDataCatalogEncryptionSettingsRequest withHeaders(GetDataCatalogEncryptionSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDataCatalogEncryptionSettingsRequest request;
    public GetDataCatalogEncryptionSettingsRequest withRequest(openapisdk.models.shared.GetDataCatalogEncryptionSettingsRequest request) {
        this.request = request;
        return this;
    }
}