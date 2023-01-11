package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartDataIngestionJobRequest {
    @JsonProperty("ClientToken")
    public String clientToken;
    public StartDataIngestionJobRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("DatasetName")
    public String datasetName;
    public StartDataIngestionJobRequest withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
    @JsonProperty("IngestionInputConfiguration")
    public IngestionInputConfiguration ingestionInputConfiguration;
    public StartDataIngestionJobRequest withIngestionInputConfiguration(IngestionInputConfiguration ingestionInputConfiguration) {
        this.ingestionInputConfiguration = ingestionInputConfiguration;
        return this;
    }
    @JsonProperty("RoleArn")
    public String roleArn;
    public StartDataIngestionJobRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}