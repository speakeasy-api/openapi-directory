package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartExportTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportId")
    public String exportId;
    public StartExportTaskResponse withExportId(String exportId) {
        this.exportId = exportId;
        return this;
    }
}