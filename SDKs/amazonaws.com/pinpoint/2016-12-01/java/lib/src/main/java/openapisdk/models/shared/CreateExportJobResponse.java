package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateExportJobResponse {
    @JsonProperty("ExportJobResponse")
    public ExportJobResponse exportJobResponse;
    public CreateExportJobResponse withExportJobResponse(ExportJobResponse exportJobResponse) {
        this.exportJobResponse = exportJobResponse;
        return this;
    }
}