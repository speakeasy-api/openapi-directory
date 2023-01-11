package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeFhirImportJobRequest {
    @JsonProperty("DatastoreId")
    public String datastoreId;
    public DescribeFhirImportJobRequest withDatastoreId(String datastoreId) {
        this.datastoreId = datastoreId;
        return this;
    }
    @JsonProperty("JobId")
    public String jobId;
    public DescribeFhirImportJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}