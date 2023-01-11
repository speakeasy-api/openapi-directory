package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatasetGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetGroupArn")
    public String datasetGroupArn;
    public CreateDatasetGroupResponse withDatasetGroupArn(String datasetGroupArn) {
        this.datasetGroupArn = datasetGroupArn;
        return this;
    }
}