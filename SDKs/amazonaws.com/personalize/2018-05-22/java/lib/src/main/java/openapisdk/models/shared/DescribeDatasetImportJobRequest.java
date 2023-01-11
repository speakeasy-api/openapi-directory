package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDatasetImportJobRequest {
    @JsonProperty("datasetImportJobArn")
    public String datasetImportJobArn;
    public DescribeDatasetImportJobRequest withDatasetImportJobArn(String datasetImportJobArn) {
        this.datasetImportJobArn = datasetImportJobArn;
        return this;
    }
}