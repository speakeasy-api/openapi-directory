package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeDatasetResponse
 * Response to a successful DescribeDataset request.
**/
public class DescribeDatasetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dataset")
    public Dataset dataset;
    public DescribeDatasetResponse withDataset(Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
}