package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetExportJobResponse {
    @JsonProperty("ExportJobResponse")
    public ExportJobResponse exportJobResponse;
    public GetExportJobResponse withExportJobResponse(ExportJobResponse exportJobResponse) {
        this.exportJobResponse = exportJobResponse;
        return this;
    }
}