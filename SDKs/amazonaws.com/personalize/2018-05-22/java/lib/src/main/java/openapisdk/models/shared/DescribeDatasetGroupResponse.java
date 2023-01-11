package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDatasetGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetGroup")
    public DatasetGroup datasetGroup;
    public DescribeDatasetGroupResponse withDatasetGroup(DatasetGroup datasetGroup) {
        this.datasetGroup = datasetGroup;
        return this;
    }
}