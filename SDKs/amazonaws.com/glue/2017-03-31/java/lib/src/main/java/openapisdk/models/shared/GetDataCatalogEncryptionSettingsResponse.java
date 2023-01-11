package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDataCatalogEncryptionSettingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataCatalogEncryptionSettings")
    public DataCatalogEncryptionSettings dataCatalogEncryptionSettings;
    public GetDataCatalogEncryptionSettingsResponse withDataCatalogEncryptionSettings(DataCatalogEncryptionSettings dataCatalogEncryptionSettings) {
        this.dataCatalogEncryptionSettings = dataCatalogEncryptionSettings;
        return this;
    }
}