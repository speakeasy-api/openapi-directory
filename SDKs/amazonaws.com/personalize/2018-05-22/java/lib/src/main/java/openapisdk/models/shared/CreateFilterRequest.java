package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateFilterRequest {
    @JsonProperty("datasetGroupArn")
    public String datasetGroupArn;
    public CreateFilterRequest withDatasetGroupArn(String datasetGroupArn) {
        this.datasetGroupArn = datasetGroupArn;
        return this;
    }
    @JsonProperty("filterExpression")
    public String filterExpression;
    public CreateFilterRequest withFilterExpression(String filterExpression) {
        this.filterExpression = filterExpression;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateFilterRequest withName(String name) {
        this.name = name;
        return this;
    }
}