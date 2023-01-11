package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDatasetExportJobRequest {
    @JsonProperty("datasetExportJobArn")
    public String datasetExportJobArn;
    public DescribeDatasetExportJobRequest withDatasetExportJobArn(String datasetExportJobArn) {
        this.datasetExportJobArn = datasetExportJobArn;
        return this;
    }
}