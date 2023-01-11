package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDataCatalogEncryptionSettingsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public GetDataCatalogEncryptionSettingsRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
}