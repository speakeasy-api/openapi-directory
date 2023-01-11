package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateDatasetImportJobRequest {
    @JsonProperty("dataSource")
    public DataSource dataSource;
    public CreateDatasetImportJobRequest withDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonProperty("datasetArn")
    public String datasetArn;
    public CreateDatasetImportJobRequest withDatasetArn(String datasetArn) {
        this.datasetArn = datasetArn;
        return this;
    }
    @JsonProperty("jobName")
    public String jobName;
    public CreateDatasetImportJobRequest withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateDatasetImportJobRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}