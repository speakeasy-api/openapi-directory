package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDatasetRequest {
    @JsonProperty("DatasetArn")
    public String datasetArn;
    public DescribeDatasetRequest withDatasetArn(String datasetArn) {
        this.datasetArn = datasetArn;
        return this;
    }
}