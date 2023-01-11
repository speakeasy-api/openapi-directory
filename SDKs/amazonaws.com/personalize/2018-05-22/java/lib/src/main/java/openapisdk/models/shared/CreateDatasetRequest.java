package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateDatasetRequest {
    @JsonProperty("datasetGroupArn")
    public String datasetGroupArn;
    public CreateDatasetRequest withDatasetGroupArn(String datasetGroupArn) {
        this.datasetGroupArn = datasetGroupArn;
        return this;
    }
    @JsonProperty("datasetType")
    public String datasetType;
    public CreateDatasetRequest withDatasetType(String datasetType) {
        this.datasetType = datasetType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateDatasetRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("schemaArn")
    public String schemaArn;
    public CreateDatasetRequest withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
}