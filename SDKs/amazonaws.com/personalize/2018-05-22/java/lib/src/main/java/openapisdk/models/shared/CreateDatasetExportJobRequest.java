package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatasetExportJobRequest {
    @JsonProperty("datasetArn")
    public String datasetArn;
    public CreateDatasetExportJobRequest withDatasetArn(String datasetArn) {
        this.datasetArn = datasetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingestionMode")
    public IngestionModeEnum ingestionMode;
    public CreateDatasetExportJobRequest withIngestionMode(IngestionModeEnum ingestionMode) {
        this.ingestionMode = ingestionMode;
        return this;
    }
    @JsonProperty("jobName")
    public String jobName;
    public CreateDatasetExportJobRequest withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonProperty("jobOutput")
    public DatasetExportJobOutput jobOutput;
    public CreateDatasetExportJobRequest withJobOutput(DatasetExportJobOutput jobOutput) {
        this.jobOutput = jobOutput;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateDatasetExportJobRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}