package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateEventTrackerRequest {
    @JsonProperty("datasetGroupArn")
    public String datasetGroupArn;
    public CreateEventTrackerRequest withDatasetGroupArn(String datasetGroupArn) {
        this.datasetGroupArn = datasetGroupArn;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateEventTrackerRequest withName(String name) {
        this.name = name;
        return this;
    }
}