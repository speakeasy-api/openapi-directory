package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDatasetRequest {
    @JsonProperty("DatasetName")
    public String datasetName;
    public DeleteDatasetRequest withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
}