package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCatalogImportStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImportStatus")
    public CatalogImportStatus importStatus;
    public GetCatalogImportStatusResponse withImportStatus(CatalogImportStatus importStatus) {
        this.importStatus = importStatus;
        return this;
    }
}