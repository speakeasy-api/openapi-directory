package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDatasetRequest {
    @JsonProperty("datasetArn")
    public String datasetArn;
    public DeleteDatasetRequest withDatasetArn(String datasetArn) {
        this.datasetArn = datasetArn;
        return this;
    }
}