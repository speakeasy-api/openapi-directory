package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteImportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importId")
    public String importId;
    public DeleteImportResponse withImportId(String importId) {
        this.importId = importId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importStatus")
    public ImportStatusEnum importStatus;
    public DeleteImportResponse withImportStatus(ImportStatusEnum importStatus) {
        this.importStatus = importStatus;
        return this;
    }
}