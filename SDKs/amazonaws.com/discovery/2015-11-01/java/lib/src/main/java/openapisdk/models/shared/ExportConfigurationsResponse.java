package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExportConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportId")
    public String exportId;
    public ExportConfigurationsResponse withExportId(String exportId) {
        this.exportId = exportId;
        return this;
    }
}