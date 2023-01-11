package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatasetExportJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetExportJobArn")
    public String datasetExportJobArn;
    public CreateDatasetExportJobResponse withDatasetExportJobArn(String datasetExportJobArn) {
        this.datasetExportJobArn = datasetExportJobArn;
        return this;
    }
}