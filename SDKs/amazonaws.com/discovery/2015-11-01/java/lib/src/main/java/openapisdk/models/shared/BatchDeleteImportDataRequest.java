package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDeleteImportDataRequest {
    @JsonProperty("importTaskIds")
    public String[] importTaskIds;
    public BatchDeleteImportDataRequest withImportTaskIds(String[] importTaskIds) {
        this.importTaskIds = importTaskIds;
        return this;
    }
}