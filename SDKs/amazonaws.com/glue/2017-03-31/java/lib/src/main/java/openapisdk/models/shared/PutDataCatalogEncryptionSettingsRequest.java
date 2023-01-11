package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutDataCatalogEncryptionSettingsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public PutDataCatalogEncryptionSettingsRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DataCatalogEncryptionSettings")
    public DataCatalogEncryptionSettings dataCatalogEncryptionSettings;
    public PutDataCatalogEncryptionSettingsRequest withDataCatalogEncryptionSettings(DataCatalogEncryptionSettings dataCatalogEncryptionSettings) {
        this.dataCatalogEncryptionSettings = dataCatalogEncryptionSettings;
        return this;
    }
}