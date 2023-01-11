package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartFhirImportJobRequest {
    @JsonProperty("ClientToken")
    public String clientToken;
    public StartFhirImportJobRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("DataAccessRoleArn")
    public String dataAccessRoleArn;
    public StartFhirImportJobRequest withDataAccessRoleArn(String dataAccessRoleArn) {
        this.dataAccessRoleArn = dataAccessRoleArn;
        return this;
    }
    @JsonProperty("DatastoreId")
    public String datastoreId;
    public StartFhirImportJobRequest withDatastoreId(String datastoreId) {
        this.datastoreId = datastoreId;
        return this;
    }
    @JsonProperty("InputDataConfig")
    public InputDataConfig inputDataConfig;
    public StartFhirImportJobRequest withInputDataConfig(InputDataConfig inputDataConfig) {
        this.inputDataConfig = inputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobName")
    public String jobName;
    public StartFhirImportJobRequest withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonProperty("JobOutputDataConfig")
    public OutputDataConfig jobOutputDataConfig;
    public StartFhirImportJobRequest withJobOutputDataConfig(OutputDataConfig jobOutputDataConfig) {
        this.jobOutputDataConfig = jobOutputDataConfig;
        return this;
    }
}