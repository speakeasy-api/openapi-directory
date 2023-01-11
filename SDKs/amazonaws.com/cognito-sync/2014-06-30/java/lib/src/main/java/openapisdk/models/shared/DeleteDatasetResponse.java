package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteDatasetResponse
 * Response to a successful DeleteDataset request.
**/
public class DeleteDatasetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dataset")
    public Dataset dataset;
    public DeleteDatasetResponse withDataset(Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
}