package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutDataLakeSettingsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public PutDataLakeSettingsRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DataLakeSettings")
    public DataLakeSettings dataLakeSettings;
    public PutDataLakeSettingsRequest withDataLakeSettings(DataLakeSettings dataLakeSettings) {
        this.dataLakeSettings = dataLakeSettings;
        return this;
    }
}