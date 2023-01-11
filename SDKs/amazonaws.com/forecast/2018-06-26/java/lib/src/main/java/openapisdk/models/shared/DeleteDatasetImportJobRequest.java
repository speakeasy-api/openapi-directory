package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDatasetImportJobRequest {
    @JsonProperty("DatasetImportJobArn")
    public String datasetImportJobArn;
    public DeleteDatasetImportJobRequest withDatasetImportJobArn(String datasetImportJobArn) {
        this.datasetImportJobArn = datasetImportJobArn;
        return this;
    }
}