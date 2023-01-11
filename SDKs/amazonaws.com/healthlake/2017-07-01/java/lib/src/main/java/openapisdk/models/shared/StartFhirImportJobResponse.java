package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartFhirImportJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatastoreId")
    public String datastoreId;
    public StartFhirImportJobResponse withDatastoreId(String datastoreId) {
        this.datastoreId = datastoreId;
        return this;
    }
    @JsonProperty("JobId")
    public String jobId;
    public StartFhirImportJobResponse withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonProperty("JobStatus")
    public JobStatusEnum jobStatus;
    public StartFhirImportJobResponse withJobStatus(JobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
}