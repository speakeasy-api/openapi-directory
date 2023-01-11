package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopContinuousExportRequest {
    @JsonProperty("exportId")
    public String exportId;
    public StopContinuousExportRequest withExportId(String exportId) {
        this.exportId = exportId;
        return this;
    }
}