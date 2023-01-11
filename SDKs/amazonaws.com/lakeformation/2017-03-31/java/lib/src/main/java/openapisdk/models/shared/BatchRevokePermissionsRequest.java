package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchRevokePermissionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public BatchRevokePermissionsRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("Entries")
    public BatchPermissionsRequestEntry[] entries;
    public BatchRevokePermissionsRequest withEntries(BatchPermissionsRequestEntry[] entries) {
        this.entries = entries;
        return this;
    }
}