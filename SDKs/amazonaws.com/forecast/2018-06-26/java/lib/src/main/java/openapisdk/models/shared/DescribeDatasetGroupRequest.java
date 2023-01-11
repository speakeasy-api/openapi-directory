package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDatasetGroupRequest {
    @JsonProperty("DatasetGroupArn")
    public String datasetGroupArn;
    public DescribeDatasetGroupRequest withDatasetGroupArn(String datasetGroupArn) {
        this.datasetGroupArn = datasetGroupArn;
        return this;
    }
}