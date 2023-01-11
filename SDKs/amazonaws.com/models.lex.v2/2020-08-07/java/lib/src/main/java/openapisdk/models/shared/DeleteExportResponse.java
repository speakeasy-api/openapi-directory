package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteExportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportId")
    public String exportId;
    public DeleteExportResponse withExportId(String exportId) {
        this.exportId = exportId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportStatus")
    public ExportStatusEnum exportStatus;
    public DeleteExportResponse withExportStatus(ExportStatusEnum exportStatus) {
        this.exportStatus = exportStatus;
        return this;
    }
}