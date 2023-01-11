package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartSupportDataExportResult
 * Container for the result of the StartSupportDataExport operation.
**/
public class StartSupportDataExportResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSetRequestId")
    public String dataSetRequestId;
    public StartSupportDataExportResult withDataSetRequestId(String dataSetRequestId) {
        this.dataSetRequestId = dataSetRequestId;
        return this;
    }
}