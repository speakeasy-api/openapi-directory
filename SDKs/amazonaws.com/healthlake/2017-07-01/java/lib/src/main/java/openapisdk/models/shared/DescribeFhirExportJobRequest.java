package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeFhirExportJobRequest {
    @JsonProperty("DatastoreId")
    public String datastoreId;
    public DescribeFhirExportJobRequest withDatastoreId(String datastoreId) {
        this.datastoreId = datastoreId;
        return this;
    }
    @JsonProperty("JobId")
    public String jobId;
    public DescribeFhirExportJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}