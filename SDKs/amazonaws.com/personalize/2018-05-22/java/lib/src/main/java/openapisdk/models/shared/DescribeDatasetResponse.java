package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDatasetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public Dataset dataset;
    public DescribeDatasetResponse withDataset(Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
}