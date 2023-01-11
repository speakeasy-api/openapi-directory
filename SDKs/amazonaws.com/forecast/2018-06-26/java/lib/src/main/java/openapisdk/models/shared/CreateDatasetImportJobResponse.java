package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatasetImportJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetImportJobArn")
    public String datasetImportJobArn;
    public CreateDatasetImportJobResponse withDatasetImportJobArn(String datasetImportJobArn) {
        this.datasetImportJobArn = datasetImportJobArn;
        return this;
    }
}