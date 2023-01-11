package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDatasetRequest {
    @JsonProperty("DatasetName")
    public String datasetName;
    public DescribeDatasetRequest withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
}