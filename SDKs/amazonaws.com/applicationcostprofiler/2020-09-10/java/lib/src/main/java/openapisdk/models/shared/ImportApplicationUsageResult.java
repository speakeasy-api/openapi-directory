package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ImportApplicationUsageResult {
    @JsonProperty("importId")
    public String importId;
    public ImportApplicationUsageResult withImportId(String importId) {
        this.importId = importId;
        return this;
    }
}