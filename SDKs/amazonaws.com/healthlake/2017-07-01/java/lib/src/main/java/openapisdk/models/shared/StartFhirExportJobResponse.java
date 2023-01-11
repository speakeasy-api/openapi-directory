package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartFhirExportJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatastoreId")
    public String datastoreId;
    public StartFhirExportJobResponse withDatastoreId(String datastoreId) {
        this.datastoreId = datastoreId;
        return this;
    }
    @JsonProperty("JobId")
    public String jobId;
    public StartFhirExportJobResponse withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonProperty("JobStatus")
    public JobStatusEnum jobStatus;
    public StartFhirExportJobResponse withJobStatus(JobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
}