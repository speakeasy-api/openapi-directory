package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDatasetGroupRequest {
    @JsonProperty("DatasetGroupArn")
    public String datasetGroupArn;
    public DeleteDatasetGroupRequest withDatasetGroupArn(String datasetGroupArn) {
        this.datasetGroupArn = datasetGroupArn;
        return this;
    }
}